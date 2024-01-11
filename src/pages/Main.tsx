import React, { useEffect, useState } from 'react'
import MainSearch from '../components/main/MainSearch'
import RankItem from '../components/main/RankItem'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Main() {
  // const imageForm = document.querySelector('#imageForm')
  // const imageInput = document.querySelector('#imageInput')

  // imageForm.addEventListener('submit', async (event) => {
  //   event.preventDefault()
  //   const file = imageInput.files[0]

  //   // get secure url from our server
  //   const { url } = await fetch('http://localhost:8080/s3Url').then((res) =>
  //     res.json(),
  //   )
  //   console.log(url)

  //   // post the image direclty to the s3 bucket
  //   await fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     body: file,
  //   })
  // })

  const submitImage = async (event) => {
    event.preventDefault()

    // const fileInput = event.target.elements.imageInput;
    // const file = fileInput.files[0];

    // try {
    //   const response = await fetch('http://localhost:8080/s3Url');
    //   const { url, key } = await response.json();

    //   console.log('Generated URL:', url);

    //   await fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'image/*',
    //     },
    //     body: file,
    //   });

    //   console.log('Image uploaded successfully');

    //   // s3에 없로드된 url 추출하여 서버에 해당 url을 보내주기 어차피 보낼
    //   console.log('stored s3 image url:', url.split("?")[0]);
    // } catch (error) {
    //   console.log('Error uploading image:', error);
    // }

    const exlist = []
    for (let i = 0; i <= 5; i++) {
      const response = await fetch('http://localhost:8080/s3Url')
      const { url, key } = await response.json()
      exlist.push(url.split('?')[0])

      console.log('Generated URL:', url)
      console.log('check exlist', exlist)
    }
  }

  return (
    <div>
      {/* <form
         action=""
         method="post"
         enctype="multipart/form-data"
         id="imageForm"
         onSubmit={submitImage}
       >
         <input type="file" id="imageInput" accept="image/*" name="image" />
         <button type="submit">Upload</button>
       </form> */}
      <MainSearch />
      {/* 현재 이미지 -> 우선순위 낮음: caroucel*/}
      <div className="flex items-center justify-center mt-10 mb-16">
        <Link to="/category/크리스마스">
          <img
            src="https://lh3.google.com/u/0/d/14Qu0DAEshBW9WWZ2DVNVjdsoCLtfmMdM=w1028-h912-iv1"
            alt=""
            className="w-[64rem]"
          />
        </Link>
      </div>

      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/category/크리스마스">
          <p> 크리스마스 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem category={'크리스마스'} />
      {/* 경로변경필요 */}
      <span className="flex flex-col items-center text-2xl font-bold my-7">
        <Link to="/category/해산물">
          <p> 한끼 뚝딱 레시피 {'>'}</p>
        </Link>
      </span>
      <RankItem category={'해산물'} />
    </div>
  )
}

export default Main
