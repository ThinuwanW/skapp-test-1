import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });


export default function Employees() {
  return (
    <div style={{height: '100vh'}}>
        <h1>Employee details</h1>
        <br/>
        <h2>Name: Eric</h2>
        <h3>Job: Finance manager</h3>
        <h3>Career Progression: Good</h3>
    </div>
  );
}
