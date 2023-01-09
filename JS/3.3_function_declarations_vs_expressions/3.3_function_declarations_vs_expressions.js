//declaration
function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2) + "%";
}
//scope
{
    let populationChina = 1441;
    let percentageChina = percentageOfWorld1(populationChina);
    console.log(percentageChina);

    let populationUkraineBeforeWar = 43.79;
    let percentageUkraineBeforeWar = percentageOfWorld1(
        populationUkraineBeforeWar
    );
    console.log(percentageUkraineBeforeWar);

    let populationIsrael = 9.3;
    let percentageIsrael = percentageOfWorld1(populationIsrael);
    console.log(percentageIsrael);

    let populationGeorgia = 3.709;
    let percentageGeorgia = percentageOfWorld1(populationGeorgia);
    console.log(percentageGeorgia);
}

//expression
const percentageOfWorld2 = (population) =>
    ((population / 7900) * 100).toFixed(2) + "%";
//scope
{
    let populationChina = 1441;
    let percentageChina = percentageOfWorld2(populationChina);
    console.log(percentageChina);

    let populationUkraineBeforeWar = 43.79;
    let percentageUkraineBeforeWar = percentageOfWorld2(
        populationUkraineBeforeWar
    );
    console.log(percentageUkraineBeforeWar);

    let populationIsrael = 9.3;
    let percentageIsrael = percentageOfWorld2(populationIsrael);
    console.log(percentageIsrael);

    let populationGeorgia = 3.709;
    let percentageGeorgia = percentageOfWorld2(populationGeorgia);
    console.log(percentageGeorgia);
}
