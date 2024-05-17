"use client";
import { Cloudinary } from '@cloudinary/url-gen/index';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import axios from 'axios';
import React, { useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Wallet = ({ files, title }: { files: FileWithPath[], title: string }) => {
  const [loading, setLoading] = useState(false);
  const [txSignature, setTxSignature] = useState<string>();

  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const { token } = useSelector((state: any) => state.auth);

 

  const pay = async () => {
    setLoading(true);
    toast.loading('Paying 0.001 Sol');

    try {
      if(files.length==0){
        toast.error("No file found!")
        throw new Error();
      }
      await makeTransaction();

      if (!txSignature) {
        throw new Error('Transaction signature is missing');
      }

      toast.dismiss();
      toast.success('Made payment of 0.001 Sol!');

      try {
        toast.loading('Uploading task to server...');
        
        await sendTask();
        toast.dismiss();
        toast.success("Task uploaded successfully!");
      } catch (e) {
        console.error(e);
        toast.dismiss();
        toast.error("Error uploading task to server.");
      }
    } catch (e) {
      console.error(e);
      toast.dismiss();
      toast.error('Error making payment');
    } finally {
      setLoading(false);
    }
  };

  const makeTransaction = async () => {
    if (!publicKey) throw new Error('Wallet not connected');

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey('6toiurfNa7x1d69qGvbYaKzbsyTfuq99vcf4bocYnreW'),
        lamports: 1000000 // 0.001 SOL (1 SOL = 10^9 lamports)
      })
    );
    console.log(transaction);

    const { context: { slot: minContextSlot }, value: { blockhash, lastValidBlockHeight } } = await connection.getLatestBlockhashAndContext();
    const signature = await sendTransaction(transaction, connection, { minContextSlot });

    await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    setTxSignature(signature);
  };

  const sendTask = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('signature', txSignature!);

    files.forEach((file) => {
      formData.append(`options`, file);
    });

    try {
      await axios.post('http://localhost:3001/v1/user/task', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    
    // try {
    //   await axios.post('http://localhost:3001/v1/user/task', {
    //     title:title, 
    //     signature:txSignature!,
    //     options: files.map((file) => ({ imageUrl: URL.createObjectURL(file) })),
    //   }, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    } catch (e) {
      console.error(e);
      throw new Error('Error while making task');
    }
  };

  return (
    <div>
      {loading
        ? <p className="border-2 cursor-wait border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100">Loading...</p>
        : <button className="border-2 border-black text-md font-extrabold px-5 py-2 rounded-xl bg-pink-100" onClick={pay}>Pay 0.001 Sol</button>
      }
    </div>
  );
};

export default Wallet;
