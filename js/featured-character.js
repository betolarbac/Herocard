//mensagem de erro caso não tenha detalhes para o personagem
const DEFAULT_DESCRIPTION = 'não há descrição para este personagem.';
const EMPTY_COMICS = 'não há quadrinhos para esse personagem.';


//carregamento dos detalhes do personagem 
function loadFeaturedCharacter(character) {
  let description = character.description ? character.description : DEFAULT_DESCRIPTION;
  $('.large-img').attr('src', getCharacterImageURL(character));
  $('.character-name').text(character.name);
  $('.character-description').text(description);
  listComics(character.comics.items);
  listLinks(character.urls);
}

function getCharacterImageURL(character) {
  return character.thumbnail.path + "/standard_fantastic." + character.thumbnail.extension;
}

//lista de HQs
function listComics(comics) {
  $('.character-comics').empty();

  if (comics.length === 0) {
    return $('<li>').text(EMPTY_COMICS).appendTo('.character-comics');
  }

  comics.forEach(comic => {
    listComicsImage(comic, comicDetails => loadComic(comicDetails.item, comicDetails.image));
  })
}

function loadComic(item, image) {
  $('<li>').append($('<img>').attr('src', image).addClass('character-comic-img')).appendTo('.character-comics');
}

function listLinks(links) {
  $('.character-links').empty();
  links.forEach(link => loadLink(link.type, link.url));
}

function loadLink(type, url) {
  $('<li>').append($('<a>').text(type).attr('href', url)).appendTo('.character-links');
}
