function makeStuff() {
  let pTag=document.createElement('p')
  pTag.textContent="hello I am here"
  document.body.append(pTag)
}

makeStuff()