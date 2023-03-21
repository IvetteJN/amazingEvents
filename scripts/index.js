//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION

function createCard(arrayEvents){
  let card = ''
  for (const event of arrayEvents) {
          card += getEvent(event)
  }
  return card
}