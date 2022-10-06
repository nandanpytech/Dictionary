const input = document.querySelector(".input");
const btn = document.getElementById("btn");
const text = document.querySelector(".text-sample");
const para = document.querySelector(".para");
const last_para = document.querySelector(".last_para");
const show = document.querySelector(".show");

input.addEventListener("click", () => {
  input.placeholder = "";
});

btn.addEventListener("click", () => {
  let value = input.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((res) => res.json())
    .then((data) => {
        let x=data[0].meanings[0].definitions
        for(i=0;i<Object.keys(x).length;i++){
            if(x[i].example!=undefined){
                var ex=x[i].example;
                break;
            }
        }
        show.innerHTML = `
        <div class="second mx-12 mb-12 ">
        <div class="sample">
            <section class="mb-4">
                <h1 class="text-sample font-sans text-2xl color  ">${data[0].word}</h1>
                <p class="text-para text-slate-500">${data[0].meanings[0].partOfSpeech}/${data[0].phonetic}</p>
            </section>
        </div>
        <div class="para font-memo text-slate-600 text-justify leading-5 ">${data[0].meanings[0].definitions[0].definition}
        </div>
    </div>
    <div class="last mx-12 mb-12 border border-slate-300 rounded-md flex py-2rounded">
        <div class="empty mr-3 w-2  bg-cyan-300"></div>
        <p class="last_para font-memo text-slate-600 text-justify leading-5 my-3 mx-2">${ex}</p>
    </div>`

    }
    );

 
});
