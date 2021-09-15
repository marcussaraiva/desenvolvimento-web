function getFlagContent(flag){
    // process.argv.forEach((element, index) => {
    //     if(element === flag){
    //         console.log(`Flag: ${flag}\nElement: ${element}\nContent: ${process.argv[index+1]}` );
    //          return process.argv[index+1]
    //     }
    // });
     const index_flag_content = process.argv.indexOf(flag) + 1;
     return process.argv[index_flag_content];
}

module.exports = getFlagContent;

// getFlag('--greeting');
// console.log(process.argv);