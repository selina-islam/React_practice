import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Intro'
import MyclassComponent from './Class'
import Reactxml from './Xml'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <h1>Hello hablu mama we are learning react js</h1>
   <br /> <br />

   <p>React.js কেন ব্যবহার করবেন:

React.js হলো একটি জনপ্রিয় JavaScript লাইব্রেরি যা মূলত UI (User Interface) তৈরি করার জন্য ব্যবহৃত হয়। এর কিছু সুবিধা হলো:

Component-Based Architecture: React.js এর মাধ্যমে অ্যাপ্লিকেশনকে ছোট ছোট পুনঃব্যবহারযোগ্য কম্পোনেন্টে ভাগ করা যায়। এতে কোড মেইনটেইন করা সহজ হয়।

Virtual DOM: React Virtual DOM ব্যবহার করে, যা আসল DOM এর পরিবর্তে দ্রুত আপডেট এবং রেন্ডার করে, ফলে অ্যাপ্লিকেশনের পারফরম্যান্স বাড়ে।

Reusable Components: React এ কম্পোনেন্ট তৈরি করলে তা বিভিন্ন স্থানে পুনঃব্যবহার করা যায়, ফলে কোড পুনঃলিখনের প্রয়োজন হয় না।

SEO Friendly: React.js এর সার্ভার সাইড রেন্ডারিং সুবিধা থাকায় এটি সার্চ ইঞ্জিন অপ্টিমাইজেশনে সহায়ক।

Large Community and Ecosystem: React.js এর বড়ো একটি কমিউনিটি এবং প্রচুর লাইব্রেরি রয়েছে, যা ডেভেলপমেন্টে সাহায্য করে।

React.js এর ইতিহাস:

2011: React.js এর প্রথম সংস্করণ তৈরি করে ফেসবুক। এটি মূলত ফেসবুকের নিউজ ফিডে দ্রুত আপডেট করতে সহায়তা করার জন্য তৈরি হয়।

2013: Facebook React.js ওপেন সোর্স করে দেয়, যাতে অন্য ডেভেলপাররাও এটি ব্যবহার করতে পারে। এই বছর থেকেই এটি জনপ্রিয় হতে শুরু করে।

2015: React Native প্রকাশিত হয়, যা React.js এর সাহায্যে মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য ব্যবহৃত হয়।

2017: React 16 সংস্করণ প্রকাশিত হয়, যেটিতে বেশ কিছু নতুন ফিচার এবং উন্নতি আনা হয়।

বর্তমান: React.js এখনও নিয়মিতভাবে আপডেট হচ্ছে এবং এটি ওয়েব ডেভেলপমেন্টে অন্যতম শীর্ষ লাইব্রেরি হিসেবে ব্যবহৃত হচ্ছে।</p>
 <br /> <br /> 

<Mycomponent/>
<br /> <br />  

<MyclassComponent/>

<br /> <br />

<Reactxml/>

    </>
  )
}

export default App
