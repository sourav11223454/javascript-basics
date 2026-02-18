let weatherData=[
    {district:"trissur",temp:32},
    {district:"kottayam",temp:29},
    {district:"palakkad",temp:34},
    {district:"ernakulam",temp:33},
    {district:"trissur",temp:29},
    {district:"kottayam",temp:30},
    {district:"palakkad",temp:32},
    {district:"ernakulam",temp:31},
]
// print district with high temperature
// output{trissur:32,kottayam:30,palakkad:34,ernakulam:33}
let output={}
weatherData.forEach(dis=>{
    const district=dis['district']
    const currentTemp=dis['temp']
    if(output.hasOwnProperty(district)){
        let oldTemp=output[district]
        if(currentTemp>oldTemp){
            output[district]=currentTemp
        }
    }else{
        output[district]=currentTemp
    }
})
console.log(output);
