const data1 = document.querySelector('.searchForm');


data1.addEventListener('submit', handleSubmit);




function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector('.searchForm-input').value;
    const searchQuery = input.trim();
    fetchResults(searchQuery);
  }




  function fetchResults(searchQuery) {
    const link = `http://www.omdbapi.com/?apikey=thewdb&s=${searchQuery}`;

    fetch(link)
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.Search.forEach(function(data2){
            output += `
            <div class="row">
            <img src=${data2.Poster}>  
            <div class="mi-title">
                <p>${data2.Title}</p>
            </div>    
            <div class="mi-year">
                <p>${data2.Year}</p>
            </div>    
        </div>   
            `
            
        }); 

        
        document.getElementById('output').innerHTML = output;
        document.getElementById('pret').innerHTML = '';
    })
  }



  window.addEventListener('load', function () {

    fetch('http://www.omdbapi.com/?apikey=thewdb&s=batman')
    .then((res) => res.json())

    .then((data) => {
        let output = '';

        data.Search.forEach(function(data2){
            output += `
                <div class="row">
                    <img src=${data2.Poster}>  
                    <div class="mi-title">
                        <p>${data2.Title}</p>
                    </div>    
                    <div class="mi-year">
                        <p>${data2.Year}</p>
                    </div>    
                </div>    
               
            `
            
        }); 

        document.getElementById('pret').innerHTML = output;
    })

    

}, false);
