function forLoop(arr)
{
  for (let i = 0; i < 25; i++)
  {
    arr.push(i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`)
  }
  return arr
}

function whileLoop(num)
{
  while(num > 0)
  {
    console.log(num)
    num--
  }
  return "done"
}

function doWhileLoop(num)
{
  do
  {
    
  } while (incrementVariable() < num)
}