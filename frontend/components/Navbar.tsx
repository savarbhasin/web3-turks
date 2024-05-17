import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '@/slices/authSlice';
import { setBalance } from '@/slices/workerSlice';
import { headers } from 'next/headers';

const Navbar = () => {
    const dispatch = useDispatch();
    const { publicKey, signMessage, disconnect } = useWallet();
    
    const { user, token } = useSelector((state:any) => state.auth);

    const [isSigning, setIsSigning] = useState(false);

    const {balance} = useSelector((state:any)=>state.worker)


    const signWallet = async () => {
        if (isSigning) return; 

        try {
            setIsSigning(true);
            toast.loading('Verifying wallet');
            const messageText = `${window.location.host} wants you to sign in with your Solana account:\n${publicKey?.toBase58()}\n\nPlease sign in.`;
            const message = new TextEncoder().encode(messageText);
            const signature = await signMessage?.(message);

            const res = await axios.post(`http://localhost:3001/v1/${user}/signup`, {
                signature,
                publicKey: publicKey?.toBase58(),
                message
            });

            dispatch(setToken(res.data.token));
            toast.dismiss();
            toast.success('Wallet successfully verified!');
        } catch (e) {
            console.error(e);
            disconnect();
            dispatch(setToken(null));
            toast.dismiss();
            toast.error('Failed to verify wallet. Please try again.');
        } finally {
            setIsSigning(false);
        }
    }

    const getBalance = async () => {
        const res = await axios.get(`http://localhost:3001/v1/worker/balance`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res) {
            toast.error('Failed to fetch balance');
            return;
        }
        dispatch(setBalance(res.data.balance));
    }

    useEffect(() => {
        token!=null && user=='worker' &&  getBalance();
    }, [token]);


    useEffect(() => {
        if (publicKey && !isSigning) {
            signWallet();
        }
    }, [publicKey]);

    const payOut = async()=>{
        const res = await axios.post('http://localhost:3001/v1/worker/payout',{},{headers:{Authorization:`Bearer ${token}`}});
        if(res){
            toast.success('Payout successful');
            dispatch(setBalance(0));    
        }
    }

    return (
        <div className='max-h-20 flex items-center justify-between px-20 text-3xl p-5 w-full font-bold border'>
            <div>
                LabelData
            </div>
            <div className='flex flex-row gap-2'>
                {user == 'worker' && token && balance>0 &&
                    <button onClick={payOut}
                    className='text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100'>
                        Pay out {balance}
                    </button>
                }
                {
                    !publicKey ? <WalletMultiButton /> : <WalletDisconnectButton disabled={isSigning} />
                }
                <div>
                    <button disabled={isSigning}
                    className='text-xl font-semibold border-2 border-black px-5 py-2 rounded-xl bg-pink-100'
                    onClick={()=>{
                        disconnect();
                        dispatch(setToken(null));
                        dispatch(setUser(null));
                        setIsSigning(false);
                    }}>Logout</button>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;
