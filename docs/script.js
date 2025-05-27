const fruitList = [
        { name: "Carrot", img: "images/Carrot.webp", basePrice: 18},
        { name: "Chocolate Carrot", img: "images/Choccarrot.webp", basePrice: 16500},
        { name: "Strawberry", img: "images/Strawberry.webp", basePrice: 14},
        { name: "Blueberry", img: "images/Blueberry.webp", basePrice: 18},
        { name: "Orange Tulip", img: "images/OrangeTulip.webp", basePrice: 767},
        { name: "Nightshade", img: "images/Nightshade.webp", basePrice: 2000},
        { name: "Red Lollipop", img: "images/Lollipop.webp", basePrice: 70000},
        { name: "Pear", img: "images/Pear.webp"},
        { name: "Candy Sunflower", img: "images/CandySunflower.webp", basePrice: 145000},
        { name: "Tomato", img: "images/Tomato.webp", basePrice: 27},
        { name: "Corn", img: "images/Corn.webp", basePrice: 36},
        { name: "Daffodil", img: "images/Daffodil.webp", basePrice: 903},
        { name: "Raspberry", img: "images/Raspberry.webp", basePrice: 90},
        { name: "Mint", img: "images/Mint.webp", basePrice: 6434},
        { name: "Glowshroom", img: "images/GlowShroom.webp", basePrice: 175},
        { name: "Watermelon", img: "images/Watermelon.webp", basePrice: 2708},
        { name: "Pumpkin", img: "images/Pumpkin.webp", basePrice: 3700 },
        { name: "Apple", img: "images/Apple.webp", basePrice: 248},
        { name: "Bamboo", img: "images/Bamboo.webp", basePrice: 3610},
        { name: "Cranberry", img: "images/Cranberry.webp", basePrice: 1805},
        { name: "Durian", img: "images/Durian.webp", basePrice: 4513},
        { name: "Moonflower", img: "images/MoonFlower.webp", basePrice: 8500},
        { name: "Starfruit", img: "images/StarFruit.webp", basePrice: 15538},
        { name: "Papaya", img: "images/Papaya.webp", basePrice: 1000},
        { name: "Coconut", img: "images/Coconut.webp", basePrice: 384},
        { name: "Cactus", img: "images/Cactus.webp", basePrice: 3068},
        { name: "Dragon Fruit", img: "images/DragonFruit.webp", basePrice: 4287},
        { name: "Easter Egg", img: "images/EasterEgg.webp", basePrice: 4513},
        { name: "Mango", img: "images/Mango.webp", basePrice: 5866},
        { name: "Peach", img: "images/Peach.webp", basePrice: 271},
        { name: "Pineapple", img: "images/Pineapple.webp", basePrice: 1805},
        { name: "Eggplant", img: " images/EggPlant.webp", basePrice: 6769},
        { name: "Moonglow", img: "images/MoonGlow.webp", basePrice: 18000},
        { name: "Passionfruit", img: "images/PassionFruit.webp", basePrice: 3204},
        { name: "Lemon", img: "images/Lemon.webp", basePrice: 500},
        { name: "Banana", img: "images/Banana.webp", basePrice: 1579},
        { name: "Blood Banana", img: "images/BloodBanana.webp", basePrice: 5415},
        { name: "Moon Melon", img: "images/MoonMelon.webp", basePrice: 16245},
        { name: "Celestiberry", img: "images/CelestiBerry.webp", basePrice: 7220},
        { name: "Grape", img: "images/Grape.webp", basePrice: 7085},
        { name: "Mushroom", img: "images/Mushroom.webp", basePrice: 136278},
        { name: "Pepper", img: "images/Pepper.webp", basePrice: 7220},
        { name: "Cacao", img: "images/Cacao.webp", basePrice: 9928},
        { name: "Moon Blossom", img: "images/MoonBlossom.webp", basePrice: 45125},
        { name: "Cherry Blossom", img: "images/CherryBlossom.webp", basePrice: 550},
        { name: "Candy Blossom", img: "images/CandyBlossom.webp", basePrice: 93567},
        { name: "Lotus", img: "images/Lotus.webp", basePrice: 20000},
        { name: "Venus Fly Trap", img: "images/FlyTrap.webp", basePrice: 17000},
        { name: "Cursed Fruit", img: "images/CursedFruit.webp", basePrice: 15000},
        { name: "Soul Fruit", img: "images/SoulFruit.webp", basePrice: 3000},
        { name: "Moon Mango", img: "images/MoonMango.webp", basePrice: 22563},
        { name: "Beanstalk", img: "images/Beanstalk.webp", basePrice: 18050},
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
