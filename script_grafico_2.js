
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    x: {
      label: "",
      grid: true,
      legend:false,
      transform: d => d / 1000
    },
    facet: {
      data: data,
      x: "anio_mision",
      legend:false,
    },
    
    marks: [
      Plot.barY(data, Plot.binY({fill: "proportion-facet"}, {y: "edad_mision", inset: 0.5})),
      // Plot.text(data, Plot.stackY(Plot.groupZ({y: "proportion-facet", text: "first"}, {z: "genero", text: "genero"}))),
      Plot.ruleY([0, 0])
    ],
    color: {
      legend:false,
      range: ["yellow","red"]
    }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
