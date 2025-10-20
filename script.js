 const QuizUI = (function(){  

  const ie = [  
    'I feel energized when I spend time alone.',  
    'I enjoy being the center of attention at parties.',  
    'I prefer deep one-on-one conversations over group chats.',  
    'I often initiate conversations with strangers.',  
    'I recharge by spending time alone.',  
    'I enjoy lively gatherings and meetups.',  
    'I reflect before I speak.',  
    'I think out loud and speak to process ideas.',  
    'I prefer a small circle of close friends.',  
    'I enjoy meeting new people regularly.',  
    'I seldom seek out large social events.',  
    'I like having a busy social calendar.',  
    'I tend to listen more than talk in groups.',  
    'I take charge and lead group conversations.',  
    'I prefer solitary activities to large group ones.',  
    'I feel comfortable introducing myself to others.',  
    'I prefer to plan quiet alone time after a busy day.',  
    'I gain energy from being around other people.',  
    'I usually think things through internally before acting.',  
    'I often act first and reflect later when excited.',  
    'I enjoy private hobbies where I can focus quietly.',  
    'I like team sports or group activities more than solo hobbies.',  
    'I keep my feelings private rather than share openly.',  
    'I openly share my feelings with a crowd when the moment fits.',  
    'I prefer small gatherings with close friends.',  
    'I enjoy large parties with many people.',  
    'I often need alone time after socializing to recover.',  
    'I rarely feel drained by social interaction.',  
    'I prefer working quietly alone to concentrate.',  
    'I prefer brainstorming sessions with a lively group.'  
  ];  
  
  const sn = [  
    'I trust concrete facts more than abstract theories.',  
    'I enjoy imagining possibilities and future scenarios.',  
    'I notice small sensory details easily.',  
    'I prefer symbolic or abstract meanings over literal details.',  
    'I rely on past experience when making decisions.',  
    'I enjoy exploring new ideas for their possibilities.',  
    'I prefer practical examples to theoretical explanations.',  
    'I like thinking about long-range implications more than immediate details.',  
    'I focus on what is clear and present.',  
    'I am drawn to patterns and underlying meanings.',  
    'I prefer step‑by‑step instructions.',  
    'I enjoy brainstorming multiple futures or outcomes.',  
    'I notice subtle changes in my environment.',  
    'I often connect seemingly unrelated ideas together.',  
    'I trust tried and tested methods.',  
    'I like speculative or imaginative fiction more than realistic fiction.',  
    'I value tangible evidence when solving problems.',  
    'I enjoy theoretical discussions about how things could be.',  
    'I focus on practical improvements rather than ideas.',  
    'I often daydream about future possibilities.',  
    'I value the present sensory experience in a moment.',  
    'I look for the hidden meaning behind events.',  
    'I prefer clear instructions rather than open-ended tasks.',  
    'I enjoy exploring abstract concepts like symbolism.',  
    'I focus on concrete results more than concepts.',  
    'I am energized by imaginative exploration.',  
    'I carefully observe details others might miss.',  
    'I tend to reinterpret events in terms of meaning and pattern.',  
    'I prefer hands-on learning over theory.',  
    'I enjoy speculative thinking about what could be.'  
  ];  
  
  const tf = [  
    'I make decisions based on objective logic rather than personal values.',  
    'I consider how others will feel when I decide.',  
    'I enjoy debating ideas impersonally to find the best answer.',  
    'I prefer harmonious relationships over winning an argument.',  
    'I prioritize consistent rules when judging situations.',  
    'I take personal values into account when making choices.',  
    'I often analyze pros and cons logically.',  
    'I try to accommodate everyone’s feelings when possible.',  
    'I prefer fairness even if it seems cold.',  
    'I often consider empathy and compassion before a decision.',  
    'I enjoy learning systems and frameworks to solve problems.',  
    'I dislike conflict and strive to keep peace.',  
    'I judge ideas by standards rather than emotions.',  
    'I evaluate situations by how they affect people emotionally.',  
    'I like critiquing arguments to improve them.',  
    'I often base choices on what feels right for people involved.',  
    'I value truth and clarity over pleasing others.',  
    'I try to be sensitive to the emotional climate in a group.',  
    'I rely on analysis when under pressure.',  
    'I consider personal values an important guide in choices.',  
    'I aim for objective correctness when possible.',  
    'I avoid hurtful honesty to preserve relationships.',  
    'I use logic to structure my plans.',  
    'I attempt to understand others’ emotional perspectives.',  
    'I prefer policies based on evidence and reason.',  
    'I try to be compassionate when applying rules.',  
    'I enjoy dissecting ideas for logical coherence.',  
    'I think first about principles, then people.',  
    'I think about people’s feelings before applying strict rules.',  
    'I enjoy systematic problem solving.'  
  ];  
  
  const jp = [  
    'I prefer a planned and organized approach to life.',  
    'I adapt well to last‑minute changes and spontaneity.',  
    'I like to finish projects before starting new ones.',  
    'I enjoy keeping options open rather than locking decisions.',  
    'I feel comfortable with structure and schedules.',  
    'I thrive when things are unplanned and flexible.',  
    'I make lists and follow them.',  
    'I prefer to decide later so I can keep possibilities open.',  
    'I prefer clear deadlines and milestones.',  
    'I enjoy spontaneous adventures without strict plans.',  
    'I like having routines I follow every day.',  
    'I feel energized by changing plans at the last minute.',  
    'I keep my workspace neat and organized.',  
    'I enjoy experimenting without a strict outcome in mind.',  
    'I plan ahead for most of my week.',  
    'I often leave tasks undone to see what feels right later.',  
    'I prefer commitments and clear expectations.',  
    'I usually delay final decisions to collect more options.',  
    'I value predictability in my schedule.',  
    'I like trying new things on impulse.',  
    'I prefer to have things settled rather than floating.',  
    'I enjoy open‑ended projects without schedules.',  
    'I follow a checklist to complete important tasks.',  
    'I sometimes resist strict plans to allow freedom.',  
    'I appreciate order and predictability at work.',  
    'I get excited when opportunities appear spontaneously.',  
    'I feel more comfortable with a fixed plan than with improvisation.',  
    'I often leave plans flexible to see what develops.',  
    'I prefer to know the next steps in advance.',  
    'I like the freedom to change my mind until the last moment.'  
  ];  
  

  const questions = [];  
  function pushWithDir(list, dim, poleA, poleB){  
    list.forEach((txt,i)=>{  
      const direction = (i%2===0)?poleA:poleB; 
      questions.push({id:questions.length+1, text:txt, dimension:dim, direction});  
    });  
  }  
  pushWithDir(ie,'IE','I','E');  
  pushWithDir(sn,'SN','S','N');  
  pushWithDir(tf,'TF','T','F');  
  pushWithDir(jp,'JP','J','P');  
  
  const STORAGE_KEY = 'mbti_answers';  
  
  function loadAnswers(){  
    const raw = localStorage.getItem(STORAGE_KEY);  
    if(!raw) return new Array(questions.length).fill(null);  
    try{ const parsed = JSON.parse(raw); if(Array.isArray(parsed) && parsed.length===questions.length) return parsed; }catch(e){}  
    return new Array(questions.length).fill(null);  
  }  
  function saveAnswers(ans){ localStorage.setItem(STORAGE_KEY, JSON.stringify(ans)); }  
  

  let state = {container:null,progText:null,progBar:null, perPage:1, idx:0, answers:loadAnswers()};  
  
  function init(opts){  
    state.container = document.getElementById(opts.containerId);  
    state.progText = document.getElementById(opts.progTextId);  
    state.progBar = document.getElementById(opts.progBarId);  
    state.perPage = opts.perPage || 1;  
  
    renderQuestion(state.idx);  
    updateProgressBar();  
  
  
    const next = document.getElementById('nextBtn');  
    const prev = document.getElementById('prevBtn');  
    const calc = document.getElementById('calcBtn');  
  
    if(next) next.addEventListener('click',()=>{ if(state.idx < questions.length-1){ state.idx++; renderQuestion(state.idx);} });  
    if(prev) prev.addEventListener('click',()=>{ if(state.idx>0){ state.idx--; renderQuestion(state.idx);} });  
    if(calc) calc.addEventListener('click',()=>{ window.location.href = 'result.html'; });  
  
  
    window.addEventListener('keydown',(e)=>{ if(e.key==='ArrowRight') document.getElementById('nextBtn').click(); if(e.key==='ArrowLeft') document.getElementById('prevBtn').click(); });  
  }  
  
  function renderQuestion(index){  
    const q = questions[index];  
    state.container.innerHTML = '';  
    const qnum = document.createElement('div'); qnum.className='q-text'; qnum.textContent = (index+1)+'. '+q.text;  
    state.container.appendChild(qnum);  
  
    const likert = document.createElement('div'); likert.className='likert';  
    const labels = ['Strongly disagree','Disagree','Neutral','Agree','Strongly agree'];  
    for(let v=1; v<=5; v++){  
      const id = 'q'+q.id+'v'+v;  
      const input = document.createElement('input'); input.type='radio'; input.name='q'+q.id; input.id=id; input.value=v;  
      input.addEventListener('change', ()=>{ state.answers[index]=v; saveAnswers(state.answers); updateProgressBar(); checkCalcButton(); });  
      const label = document.createElement('label'); label.htmlFor=id; label.textContent = labels[v-1];  
      likert.appendChild(input); likert.appendChild(label);  
    }  
    state.container.appendChild(likert);  
  
    
    const selected = state.answers[index];  
    if(selected) document.getElementById('q'+q.id+'v'+selected).checked = true;  
  
    
    document.getElementById('prevBtn').disabled = (index===0);  
    document.getElementById('nextBtn').disabled = (index===questions.length-1);  
  
     
    if(state.progText) state.progText.textContent = 'Question '+(index+1)+' / '+questions.length;  
  }  
  
  function updateProgressBar(){  
    const answered = state.answers.filter(x=>x!=null).length;  
    const pct = Math.round((answered/questions.length)*100);  
    if(state.progBar) state.progBar.style.width = pct+'%';  
  
  
    checkCalcButton();  
  }  
  
  function checkCalcButton(){  
    const calc = document.getElementById('calcBtn');  
    if(!calc) return;  
    const all = state.answers.every(x=>x!=null);  
    if(all) calc.style.display='inline-block'; else calc.style.display='none';  
  }  
  
  
  function computeBasicPercentages(){  

    let E_raw=0,I_raw=0,N_raw=0,S_raw=0,T_raw=0,F_raw=0,J_raw=0,P_raw=0;  
    questions.forEach((q,idx)=>{  
      const a = state.answers[idx];  
      if(a==null) return;  
      const pts = a-1; // 0..4  
      if(q.dimension==='IE'){  
        if(q.direction==='E') E_raw += pts; else I_raw += pts;  
      }  
      if(q.dimension==='SN'){  
        if(q.direction==='N') N_raw += pts; else S_raw += pts;  
      }  
      if(q.dimension==='TF'){  
        if(q.direction==='T') T_raw += pts; else F_raw += pts;  
      }  
      if(q.dimension==='JP'){  
        if(q.direction==='J') J_raw += pts; else P_raw += pts;  
      }  
    });  
  
    const E_norm = (E_raw + 0.0001) / ((E_raw+I_raw) + 0.0002) * 100;  
    const I_norm = 100 - E_norm;  
    const N_norm = (N_raw + 0.0001) / ((N_raw+S_raw) + 0.0002) * 100;  
    const S_norm = 100 - N_norm;  
    const T_norm = (T_raw + 0.0001) / ((T_raw+F_raw) + 0.0002) * 100;  
    const F_norm = 100 - T_norm;  
    const J_norm = (J_raw + 0.0001) / ((J_raw+P_raw) + 0.0002) * 100;  
    const P_norm = 100 - J_norm;  
  
    return {E:E_norm,I:I_norm,N:N_norm,S:S_norm,T:T_norm,F:F_norm,J:J_norm,P:P_norm};  
  }  
  
  function buildMBTI(basic){  
    const l1 = (basic.I>basic.E)?'I':'E';  
    const l2 = (basic.S>basic.N)?'S':'N';  
    const l3 = (basic.T>basic.F)?'T':'F';  
    const l4 = (basic.J>basic.P)?'J':'P';  
    return l1+l2+l3+l4;  
  }  
  
  function computeFunctions(basic){  
    const I = basic.I, E = basic.E, S = basic.S, N = basic.N, T = basic.T, F = basic.F, J = basic.J, P = basic.P;  
    const Ni = (I * N * J)/10000;  
    const Ne = (E * N * P)/10000;  
    const Si = (I * S * J)/10000;  
    const Se = (E * S * P)/10000;  
    const Fi = (I * F * P)/10000;  
    const Fe = (E * F * J)/10000;  
    const Ti = (I * T * P)/10000;  
    const Te = (E * T * J)/10000;  
    const raw = {Ni,Ne,Si,Se,Fi,Fe,Ti,Te};  
    const total = Object.values(raw).reduce((a,b)=>a+b,0)||1;  
    const scaled = {};  
    for(const k in raw) scaled[k]= (raw[k]/total)*100;  
    return scaled;  
  }  
  
 
  const mbtiDescriptions = {  
    'INTJ': {title:'Architect', enneagram:'5w6 / 1w9', desc:'Strategic, independent, future‑focused planner.'},  
    'INTP': {title:'Thinker', enneagram:'5w4 / 9w8', desc:'Analytical, curious, ideas‑driven.'},  
    'ENTJ': {title:'Commander', enneagram:'8w7 / 3w4', desc:'Decisive, results‑oriented leader.'},  
    'ENTP': {title:'Debater', enneagram:'7w6 / 8w7', desc:'Inventive and quick‑witted.'},  
    'INFJ': {title:'Advocate', enneagram:'4w5 / 1w9', desc:'Insightful, idealistic, values meaning.'},  
    'INFP': {title:'Mediator', enneagram:'4w5 / 9w1', desc:'Value‑driven, empathetic, imaginative.'},  
    'ENFJ': {title:'Protagonist', enneagram:'2w3 / 1w2', desc:'Charismatic, people‑focused leader.'},  
    'ENFP': {title:'Campaigner', enneagram:'7w6 / 4w3', desc:'Enthusiastic, creative, seeks possibilities.'},  
    'ISTJ': {title:'Logistician', enneagram:'1w2 / 6w5', desc:'Responsible, detail‑oriented, reliable.'},  
    'ISFJ': {title:'Defender', enneagram:'2w1 / 6w5', desc:'Supportive and attentive to others.'},  
    'ESTJ': {title:'Executive', enneagram:'8w7 / 3w4', desc:'Organized, pragmatic leader.'},  
    'ESFJ': {title:'Consul', enneagram:'2w3 / 6w5', desc:'Warm, community‑oriented.'},  
    'ISTP': {title:'Virtuoso', enneagram:'5w6 / 8w7', desc:'Hands‑on, adaptable problem solver.'},  
    'ISFP': {title:'Adventurer', enneagram:'9w8 / 4w3', desc:'Expressive and values aesthetics.'},  
    'ESTP': {title:'Entrepreneur', enneagram:'8w7 / 7w6', desc:'Energetic, practical, action‑oriented.'},  
    'ESFP': {title:'Entertainer', enneagram:'7w6 / 2w3', desc:'Spontaneous and people‑centered.'}  
  };  
  
  function showResultsOnPage(){   
    state.answers = loadAnswers();  
    const basic = computeBasicPercentages();  
    const mbti = buildMBTI(basic);  
    const funcs = computeFunctions(basic);  
  
    // render summary  
    const sum = document.getElementById('resultSummary');  
    if(!sum) return; // this function can be called on other pages  
    sum.innerHTML = `  
      <div><strong>Predicted MBTI:</strong> ${mbti}</div>  
      <div class="small">I: ${basic.I.toFixed(2)}% &nbsp; E: ${basic.E.toFixed(2)}%</div>  
      <div class="small">S: ${basic.S.toFixed(2)}% &nbsp; N: ${basic.N.toFixed(2)}%</div>  
      <div class="small">T: ${basic.T.toFixed(2)}% &nbsp; F: ${basic.F.toFixed(2)}%</div>  
      <div class="small">J: ${basic.J.toFixed(2)}% &nbsp; P: ${basic.P.toFixed(2)}%</div>  
    `;  
  
 
    const fg = document.getElementById('functionsGrid'); fg.innerHTML='';  
    const ordered = Object.entries(funcs).sort((a,b)=>b[1]-a[1]);  
    ordered.forEach(([k,v])=>{ const d = document.createElement('div'); d.className='func'; d.innerHTML = `<div style="font-weight:700">${k}</div><div class="small">${v.toFixed(2)}%</div>`; fg.appendChild(d); });  
  
  
const td = document.getElementById('typeDesc');  
const desc = mbtiDescriptions[mbti] || {title:'',enneagram:'—',desc:'No description available.'};  


const imagePath = `images/${mbti}.jpg`; 

td.innerHTML = `
  <div style="font-weight:700">${mbti} — ${desc.title}</div>
  <div class="mbti-image-area">
    <img src="${imagePath}" alt="${mbti}" style="max-width:200px;border-radius:12px;margin-top:10px;">
  </div>
  <div class="small" style="margin-top:6px">${desc.desc}</div>
  <div class="small" style="margin-top:6px"><strong>Suggested Enneagram:</strong> ${desc.enneagram}</div>
`;
  }  
  
  function getExportText(){  
    state.answers = loadAnswers();  
    const basic = computeBasicPercentages();  
    const mbti = buildMBTI(basic);  
    const funcs = computeFunctions(basic);  
    let out = `MBTI result: ${mbti}\n`;  
    out += `I:${basic.I.toFixed(2)} E:${basic.E.toFixed(2)}\n`;  
    out += `S:${basic.S.toFixed(2)} N:${basic.N.toFixed(2)}\n`;  
    out += `T:${basic.T.toFixed(2)} F:${basic.F.toFixed(2)}\n`;  
    out += `J:${basic.J.toFixed(2)} P:${basic.P.toFixed(2)}\n\nFunctions:\n`;  
    for(const k in funcs) out += `${k}: ${funcs[k].toFixed(2)}%\n`;  
    return out;  
  }  
  
 
  return {  
    init,  
    showResults: showResultsOnPage,  
    getExportText  
  };  
})();  
  
