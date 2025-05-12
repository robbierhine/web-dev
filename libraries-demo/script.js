// const getData = async () => {
//     const response = await fetch("gutenberg_metadata.csv");
//     let data = await response.text();
    
//     const parsedData = Papa.parse(data, {
//         header: true,
//         skipEmptyLines: true,
//       });
//     //   console.log(parsedData.data);
//     //   parsedData=parsedData.data;

//     //   let titles = parsedData.data.map((row) => {
//     //     return row.Title;
//     //   });
//     //   console.log(titles); 
//     displayData(parsedData);

// }

// const displayData = (data) => {
//     const html = data.map((row) => {
//         return `<div class="book">
//                 <div class='title'>
//                     <h2>${row.Title}</h2>
//                 </div>`;
//     })
//     document.querySelector("section").innerHTML = html.join("");
// }



// getData();
// displayData();


const getData = async () => {
    const response = await fetch("gutenberg_metadata.csv");
    let data = await response.text();

    // This takes care of removing the header and parsing the data
    // Check out documentation here: https://www.papaparse.com/docs
    // For it to work you need to add the library to your index.html page. Look at this folder's index page to get the link. 
    
    const parsedData = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    });
  
    console.log(parsedData.data);
    let titles = parsedData.data.map((row) => {
      return row.Title;
    });
    console.log(titles);
  };

  getData();