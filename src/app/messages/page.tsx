import React from 'react';
import Link from 'next/link';

export default function Messages() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

{/*  Chat Interface  */}
<div className="flex-1 flex overflow-hidden">
{/*  Chat List Column  */}
<div className="w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
<div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="font-bold text-lg">Messages</h3>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
<span className="material-symbols-outlined text-lg">edit_square</span>
</button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
{/*  Conversation Item: Active  */}
<div className="p-4 flex gap-3 cursor-pointer bg-primary/5 border-l-4 border-primary">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full" data-alt="Portrait of a smiling woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyoIggex6_6OkZDhtZkp2bbHkY9CsWiGd1c6S_mXfpVJq5vox-XihmVsndkddTX4mm_8Cz1Zmx2XNv1i5jf6Ei6Z8XPCEgq6UnV_ehomTrBAU6BiKTTg5SvbacvlRlwiK66IYdBfztSTNyhXGMX_7T2JX8bL7I6e4adP7bwgjGr9ISpuvrEfZ38XqotrPb6TH2agnDXeD0_Oo7iog1k8R2P8UgM3HW2j015wA_7gO6WMtM_5h3KcKJ0yo5BndghC-r_IWKk-F7qFE"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold truncate">Sarah Smith</span>
<span className="text-[10px] text-slate-500 font-medium">10:45 AM</span>
</div>
<p className="text-xs text-slate-100 font-medium truncate">The contract has been signed and I'm ready...</p>
<div className="flex mt-1">
<span className="px-1.5 py-0.5 rounded-full bg-primary text-[10px] text-white font-bold leading-none">2</span>
</div>
</div>
</div>
{/*  Conversation Item  */}
<div className="p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-l-4 border-transparent">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full" data-alt="Portrait of a man in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05dyMOk-v3bzJOFcqjLtX2JdPpO4q1ItAG15VDVHNHzDD1vlhKjJ_1q5Ngh2s84wH531-SuFY2tY30BcfsTzN8en_YtDOR7eJFfQduu2-GsCeS2MQcpoH-cNSOqAwoJVx-kQHy34tZHMiZ4NdfJQYyxpS0Wnle_4fSxGaXlwwubwinS8Q1_qf8Jb_mqQO0RFJqWfJnJJRxD-UGlIMQdJiX93zSwmj1CWLJt3BTTfci1sHqZEB84rscmbE38eFCwoATPlLmDn-6x0"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-400 border-2 border-white dark:border-background-dark rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold truncate text-slate-900 dark:text-slate-100">John Doe</span>
<span className="text-[10px] text-slate-500">Yesterday</span>
</div>
<p className="text-xs text-slate-500 truncate">Can we schedule the demo for tomorrow? I have some updates.</p>
</div>
</div>
{/*  Conversation Item  */}
<div className="p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-l-4 border-transparent">
<div className="shrink-0">
<img className="w-12 h-12 rounded-full" data-alt="Portrait of a man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzkogNOmM3euh-aBdzrOLHAvJYHl1NZZGCuRQvDX7M6uVbgwwzJtgQ0xR1UrsmJPwXxTlkA-76oU-sMiHkPqvkKAL0aEEpaTaaBVOaFBLBErBJsVaHa3dKqogYPS25eV3BAy0iC3rKyn9iwlsDzTjr6yAxY76wuvG4_wK_R-AqAnMzn1ldldWrj9_3QooPSjcPoN4gyupLYTGRkJt0r7-8ri1DTJpswfMX33rp17aDe8EhM5brsWZhRCjm7Adlqs3STPjc3s6X-TM"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold truncate text-slate-900 dark:text-slate-100">Michael Chen</span>
<span className="text-[10px] text-slate-500">Monday</span>
</div>
<p className="text-xs text-slate-500 truncate">Looking forward to our meeting to discuss the roadmap.</p>
</div>
</div>
{/*  Conversation Item  */}
<div className="p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-l-4 border-transparent">
<div className="shrink-0">
<img className="w-12 h-12 rounded-full" data-alt="Portrait of a young woman with a neutral expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDosvSdsbvecPhk3hQ8tcAynREUGfamAVzjs3Ciz3s0uzbiW7w9d1FwyiNNFKQc9t3rpAw2iz9Vt8iCW2vCn42_DgGB0r66kP-PmMo8gyIWEZyhBMVHAmPTJnWbXt15n5O_I1fSYnEv928YKrkBEpvQHpNKIN_WDJ7O_ZHsW5WKXVlZ-wFZbgwn14jmnSNuvin_QVUyCOjF8ICmcSuYQw5AQGmNCl0X2R1cjTsgS3i2-H3vHekZwXkqMzNu86CEdb2KtV0njKrI-pU"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold truncate text-slate-900 dark:text-slate-100">Emma Wilson</span>
<span className="text-[10px] text-slate-500">24 Oct</span>
</div>
<p className="text-xs text-slate-500 truncate">I've sent the updated quote to the client. Waiting on them.</p>
</div>
</div>
{/*  Conversation Item  */}
<div className="p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-l-4 border-transparent">
<div className="shrink-0">
<img className="w-12 h-12 rounded-full" data-alt="Portrait of a man looking serious" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrgP9KSGEalbDMmT7Ij_bHCu_-ecEKXdkFh1RWshF5PutbB_NW08GLXn-N9J5nKh5TcSvygYqP-SQFydH6lvtHqEvGeaS2UNGwYxr_PmdxTGS-dor1YUP6NAf7VfcZc-qeG3aBVmb2TIXohr69KkRVRz7LJF3oWTHdkllcwYimHZPkVv7Umihbw3yW72sM_u-Ovcg8bp1iFdkvrkqX_uc0eOW3icys83gLLBTlv2KeyJIkbdM12VsH5MxD9xa-IMN6oG1UzBj5MQ"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<span className="font-semibold truncate text-slate-900 dark:text-slate-100">Robert Taylor</span>
<span className="text-[10px] text-slate-500">22 Oct</span>
</div>
<p className="text-xs text-slate-500 truncate">Let me know if you need anything else for the presentation.</p>
</div>
</div>
</div>
</div>
{/*  Chat Area Column  */}
<div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-background-dark/30">
{/*  Chat Header  */}
<div className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full" data-alt="Active chat user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoV0aJuopKQ64ywk37NfVmwWXDp68jO5Hx-XdxQk8BNAuRtM1_9sO6MqhseKUkG5Wbez4PyFvDW7zx6jgBcR5_E3HVlVlGOZLF42-M5WL6JBppr0SAVeugOaDv0iYKwDo2hSql1JXP0eiT856HLxKg_OgiHe5YWcvB7--uiQGVNUMTvWwgqmzQAgHf6jr3R8O83DgzoVKwroj-gjpXd3ZsSnhd9BNtcLdmpA0ex8lxNXdFFp9-gLNkJvUcChQOIKx3by_rjIVLZXY"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></div>
</div>
<div>
<h4 className="font-semibold text-sm">Sarah Smith</h4>
<p className="text-[10px] text-green-500 font-medium">Online</p>
</div>
</div>
<div className="flex items-center gap-1">
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">call</span>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">videocam</span>
</button>
<div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
<span className="material-symbols-outlined">info</span>
</button>
</div>
</div>
{/*  Messages History  */}
<div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
<div className="flex justify-center">
<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-semibold text-slate-500 tracking-wider uppercase">Today</span>
</div>
{/*  Message: Incoming  */}
<div className="flex gap-3 max-w-2xl">
<img className="w-8 h-8 rounded-full self-end" data-alt="Small avatar for Sarah Smith" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMs01_pRyF_TrkvLfyiDGXBEeRklJnay9aom3jMsqTl_wUXH5Yj0cn4kFoi03y1TiAsUeEeHi2LEOx4CISeiiVTV2BwbG-g9MZwsPqYW4t2ctJHfQmBevuZpyCxY3iUQrGfL_OS71gU80ynJxf4oFLqu3tlOOpliQoglRjDxBxvM8Thtgq_qh43kx7zmMlxOAlvo6-Qgg9pn5SH2M91Fa7SRjGPCbNI6znLpSdK-hE3kHY-57inhgZ0Lb1-Cyj24A1YRKvtPtVHW8"/>
<div className="flex flex-col gap-1">
<div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none">
<p className="text-sm">Hi Alex! I've just finished reviewing the Q4 proposal you sent over yesterday.</p>
</div>
<span className="text-[10px] text-slate-500 ml-1">10:42 AM</span>
</div>
</div>
{/*  Message: Outgoing  */}
<div className="flex gap-3 max-w-2xl ml-auto flex-row-reverse">
<div className="flex flex-col gap-1 items-end">
<div className="bg-primary px-4 py-3 rounded-2xl rounded-br-none text-white">
<p className="text-sm">Great to hear, Sarah! What are your initial thoughts? Does the budget alignment work for your team?</p>
</div>
<div className="flex items-center gap-1">
<span className="text-[10px] text-slate-500">10:44 AM</span>
<span className="material-symbols-outlined text-xs text-primary leading-none">done_all</span>
</div>
</div>
</div>
{/*  Message: Incoming  */}
<div className="flex gap-3 max-w-2xl">
<img className="w-8 h-8 rounded-full self-end" data-alt="Small avatar for Sarah Smith" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfN9u4kYbnE6b99IBsuKOmCfjy6ftuqdgqt1cyatR2shSi3lPPcVKDIHChgtVUaszjCD4GWH6Ci8Ssu8N8nmxLz9os5VbRCMf_9OjvRlqiXQPHfd5_cemL7YOKiCTyRU-e4FgijlMby2lbtHgSwY3t3R5Adw1-hDEqZr95mWgyNC6qhZysKYjrQpZ7padedrrwUUuSUnOS7YA0dRejZh17frDCVzzeKcOedeQ7ohs4pm6ipQ9Q4kN7N4gvwsr7oP9s4Xu1LQFJXuE"/>
<div className="flex flex-col gap-1">
<div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none">
<p className="text-sm">Overall it looks solid. I have a few minor tweaks on the service level agreement section, but the budget is within our expectations.</p>
</div>
<div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none mt-1">
<p className="text-sm">The contract has been signed and I'm ready to move forward with the implementation plan!</p>
</div>
<span className="text-[10px] text-slate-500 ml-1">10:45 AM</span>
</div>
</div>
{/*  Typing Indicator  */}
<div className="flex gap-3 items-center">
<img className="w-8 h-8 rounded-full" data-alt="Sarah typing avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9DDC_t4h8k82bGyDh_nR83C93NmOiuhqlAw8JFwxsoMxSWyBTkSWF81Tf7CKbt07t1j00dJPkmvyYW7oyPDGoIddY5sAZGlVg7rPPHoybhyR695c75QCM-Z-9J0hZvfNm615Af-RAX5iXrmZ0ZW15EPuZytf0SOl5_-Ho_Zu1qoGTB4aq-LHdnfRlmvotCAguUNNcPXIkWXPLH4QmId1QijNrUkamgeeV-kOBHhJIUx4aOBPt-k4jMDNPGHIOJkQVa0rmsQWRQ20"/>
<div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
</div>
</div>
</div>
{/*  Input Area  */}
<div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark/80">
<div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-2 flex items-end gap-2 border border-transparent focus-within:border-primary/30 transition-all">
<div className="flex items-center px-1">
<button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined">attach_file</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined">mood</span>
</button>
</div>
<textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2.5 px-1 resize-none overflow-hidden placeholder:text-slate-500 max-h-32" placeholder="Type your message here..." rows="1"></textarea>
<div className="flex items-center px-1">
<button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined">mic</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-4">
<p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Formatting:</p>
<div className="flex gap-2">
<span className="text-[10px] text-slate-400 border border-slate-300 dark:border-slate-700 px-1.5 rounded leading-none pt-0.5"><b>B</b></span>
<span className="text-[10px] text-slate-400 border border-slate-300 dark:border-slate-700 px-1.5 rounded leading-none pt-0.5"><i>I</i></span>
<span className="text-[10px] text-slate-400 border border-slate-300 dark:border-slate-700 px-1.5 rounded leading-none pt-0.5"><del>S</del></span>
</div>
</div>
<p className="text-[10px] text-slate-500">Press Enter to send</p>
</div>
</div>
</div>
</div>
    </>
  );
}
