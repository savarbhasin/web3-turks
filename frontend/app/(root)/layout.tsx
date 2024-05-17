"use client"
import { Inter } from "next/font/google";
import authReducer from '../../slices/authSlice'
import workerReducer from '../../slices/workerSlice'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import "../../app/globals.css";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
require('@solana/wallet-adapter-react-ui/styles.css');

const inter = Inter({ subsets: ["latin"] });

const store = configureStore({
  reducer:{
    auth:authReducer,
    worker:workerReducer
  }
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = process.env.CONNECTION_URL;
    const wallets = useMemo(
        () => [
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );


  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <Provider store={store}>
                    <Toaster/>
                    {children}
                 </Provider>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);
}
