import Head from 'next/head'
import styles from './styles/array.module.css'
import Footer from './components/Footer'
import Layout from './components/Layout'
import React, {Component} from 'react'

var newArr = [];
class Array extends Component {

    arrays = e => {
      console.log('evento array');
        if(e.keyCode === 13){
      newArr = [];
      newArr.push(document.getElementById("input").value)
      const make = newArr;
      console.log(make);
        }
    }
    render(){
    return (
    <div className={styles.container}>
      <Head>
        <title>Arrays exemplos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
        <h1 className={styles.title}>
          Bem Vindo ao Exemplo de Arrays
        </h1>
        <div className={styles.main}>


        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>INPUT</p>
          </td>
          <td className={styles.card}>
            <p>RESPOSTA</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 2, 3].push(&apos;4&apos;)</p>
          </td>
          <td className={styles.result}>
          <p>[1, 2, 3 ,4]</p>
          </td>
        </tr>


        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 2, 3].pop()</p>
          </td>
          <td className={styles.result}>
          <p>[1, 2]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 2, 3].shift()</p>
          </td>
          <td className={styles.result}>
          <p>[2, 3]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 2, 3].unshift(0)</p>
          </td>
          <td className={styles.result}>
          <p>[0, 1, 2, 3]</p>
          </td>
        </tr>




        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[&apos;a&apos;, &apos;b&apos;].concat(&apos;c&apos;)</p>
          </td>
          <td className={styles.result}>
          <p>[&apos;a&apos;, &apos;b&apos;, &apos;c&apos;]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[&apos;a&apos;, &apos;b&apos;, &apos;c&apos;].slice(1)</p>
          </td>
          <td className={styles.result}>
          <p>[&apos;a&apos;, &apos;b&apos;]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[&apos;a&apos;, &apos;b&apos;, &apos;c&apos;].join(&apos;-&apos;)</p>
          </td>
          <td className={styles.result}>
          <p>a-b-c</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[&apos;a&apos;, &apos;b&apos;, &apos;c&apos;].indexOf(&apos;b&apos;)</p>
          </td>
          <td className={styles.result}>
          <p> 1 </p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[&apos;a&apos;, &apos;b&apos;, &apos;c&apos;].includes(&apos;c&apos;)</p>
          </td>
          <td className={styles.result}>
          <p> true </p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[3, 5, 6, 8].find((n) => n%2 === 0)</p>
          </td>
          <td className={styles.result}>
          <p>6</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[2, 4, 3, 5].findIndex((n) => n%2 !== 0)</p>
          </td>
          <td className={styles.result}>
          <p>2</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[2, 4, 3, 5].map((n) => n * 2)</p>
          </td>
          <td className={styles.result}>
          <p>[6,8,16,12]</p>
          </td>
        </tr>


        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 4, 7, 8].filter((n) => n % 2 === 0)</p>
          </td>
          <td className={styles.result}>
          <p>[4 ,8]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[2, 4, 3, 5].reduce((acc, cur) => acc + cur)</p>
          </td>
          <td className={styles.result}>
          <p>16</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>string([2, 3, 4, 5].every((x) =&gt; x {' < '} 6));</p>
          </td>
          <td className={styles.result}>
          <p>true</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>String("[3, 5, 6, 8].some((n) => n > 6)");</p>
          </td>
          <td className={styles.result}>
          <p>true</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[1, 2, 3, 4].reverse()</p>
          </td>
          <td className={styles.result}>
          <p>[4,3,2,1]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[3, 5, 7, 8].reverse()</p>
          </td>
          <td className={styles.result}>
          <p>[4,3,2,1]</p>
          </td>
        </tr>

        <tr className={styles.grid}>
          <td className={styles.card}>
             <p>[3, 5, 7, 8].at(-2)</p>
          </td>
          <td className={styles.result}>
          <p>7</p>
          </td>
        </tr>

      </div>

      <footer>
       <Footer />
      </footer>
    </div>
  )
  }
};

export default Array;