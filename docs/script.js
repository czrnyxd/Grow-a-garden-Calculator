const fruitList = [
        { name: "Carrot", img: "images/Carrot.webp", basePrice: 18},
        { name: "Chocolate Carrot", img: "images/Choccarrot.webp", basePrice: 16500},
        { name: "Strawberry", img: "images/Strawberry.webp", basePrice: 14},
        { name: "Blueberry", img: "images/Blueberry.webp", basePrice: 18},
        { name: "Orange Tulip", img: "images/OrangeTulip.webp", basePrice: 767},
        { name: "Pumpkin", img: "images/Pumpkin.webp", basePrice: 3700 },
        { name: "Cranberry", img: "images/Cranberry.webp", basePrice: 1805},
        { name: "Dragon Fruit", img: "images/DragonFruit.webp", basePrice: 4287},
        { name: "Easter Egg", img: "images/EasterEgg.webp", basePrice: 4513},
        { name: "Grape", img: "images/Grape.webp", basePrice: 7085},
        { name: "Coconut", img: "images/Coconut.webp", basePrice: 384},
        { name: "Candy Blossom", img: "images/CandyBlossom.webp", basePrice: 93567},
    ];
    const growthList=[{name:'None',mult:1},{name:'Golden',mult:20},{name:'Rainbow',mult:50}];
    const envList=[
        {name:'Wet',stack:1},{name:'Chilled',stack:1},{name:'Chocolate',stack:1},{name:'Moonlit',stack:1},
        {name:'Bloodlit',stack:3},{name:'Frozen',stack:9},{name:'Zombified',stack:24},
        {name:'Shocked',stack:99},{name:'Celestial',stack:119},{name:'Disco',stack:124}
    ];

    function addFruit(){
        const container=document.getElementById('fruits');
        const f=fruitList[0];
        const card=document.createElement('div');card.className='card';
        card.innerHTML=`
            <button class="remove-fruit-btn" onclick="removeFruit(this)">×</button>
            <div class="fruit-header">
              <img src="${f.img}"><div class="info"><h2>${f.name}</h2><div class="base-price">Base: $${f.basePrice}</div></div>
            </div>
            <div class="fruit-dropdown">
              <div class="fruit-dropdown-btn" onclick="toggleDropdown(this)"><img src="${f.img}"><span>${f.name}</span></div>
              <div class="fruit-dropdown-content">
                <input type="text" class="fruit-search" placeholder="Szukaj..." oninput="filterFruits(this)">
                ${fruitList.map((fr,i)=>`<div onclick="selectFruit(this,${i})"><img src="${fr.img}"><span>${fr.name}</span></div>`).join('')}
              </div>
            </div>
            <div class="mutations">
              <select class="growth-select" onchange="updatePrice(this.closest('.card'))">${growthList.map(g=>`<option value="${g.mult}">${g.name} ×${g.mult}</option>`).join('')}</select>
              <select class="env-select">${envList.map(e=>`<option value="${e.stack}">${e.name} (x${e.stack + 1})</option>`).join('')}</select>
              <button class="btn" onclick="addMutation(this)">Add Mutation</button>
              <div class="mutation-list"></div>
            </div>
            <div class="multiplier-section">Total Multiplier: <span class="total-mult">1</span>x</div>
            <div class="price-section">Min Price: $<span class="final-price">${f.basePrice}</span></div>
        `;
        container.appendChild(card);
        updatePrice(card);
        updateTotal();
    }
    function removeFruit(btn){btn.closest('.card').remove();updateTotal()}
    function toggleDropdown(btn){const c=btn.nextElementSibling;c.style.display=c.style.display==='block'?'none':'block'}
    function filterFruits(input){
        const term=input.value.toLowerCase();
        const items=input.nextElementSibling.nextElementSibling || input.parentElement.querySelectorAll('div');
        document.querySelectorAll('.fruit-dropdown-content div').forEach(div=>{
            const txt=div.textContent.toLowerCase();
            div.style.display=txt.includes(term)?'flex':'none';
        });
    }
    function selectFruit(el,i){
        const fr=fruitList[i],card=el.closest('.card');
        card.querySelector('.fruit-header img').src=fr.img;
        card.querySelector('h2').textContent=fr.name;
        card.querySelector('.base-price').textContent=`Base: $${fr.basePrice}`;
        const btn=card.querySelector('.fruit-dropdown-btn');
        btn.querySelector('img').src=fr.img;
        btn.querySelector('span').textContent=fr.name;
        el.parentElement.style.display='none';updatePrice(card);
    }
    function addMutation(btn){
        const card=btn.closest('.card');
        const sel=card.querySelector('.env-select');
        const stack=parseInt(sel.value);
        const txt=sel.selectedOptions[0].textContent;
        const removedIndex=sel.selectedIndex;
        const removedOption=sel.options[removedIndex];
        sel.remove(removedIndex);
        
        const div=document.createElement('div');div.className='mutation-item';div.dataset.stack=stack;
        const span=document.createElement('span');span.textContent=txt;
        const rm=document.createElement('button');rm.className='remove-btn';rm.textContent='Delete';rm.onclick=()=>{
            const opt=document.createElement('option');opt.value=stack;opt.textContent=txt;
            sel.appendChild(opt);
            div.remove();updatePrice(card);
        };
        div.appendChild(span);div.appendChild(rm);
        card.querySelector('.mutation-list').insertBefore(div,card.querySelector('.mutation-list').firstChild);
        updatePrice(card);
    }
    function updatePrice(card){
        const base=parseFloat(card.querySelector('.base-price').textContent.replace(/[^0-9]/g,''));
        const growth=parseFloat(card.querySelector('.growth-select').value);
        let sumStack=0;
        card.querySelectorAll('.mutation-item').forEach(item=>sumStack+=parseInt(item.dataset.stack));
        const totalMult=growth*(1+sumStack);
        const final=base*totalMult;
        card.querySelector('.total-mult').textContent=totalMult;
        card.querySelector('.final-price').textContent=final.toLocaleString();
        updateTotal();
    }
    function updateTotal(){
        let sum=0;
        document.querySelectorAll('.final-price').forEach(e=>sum+=parseFloat(e.textContent.replace(/,/g,'')));
        document.getElementById('total-sum').textContent=`Total Min Price: $${sum.toLocaleString()}`;
    }
    addFruit();
