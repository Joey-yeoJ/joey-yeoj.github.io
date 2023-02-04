dquote();
function dquote(){
	var quotes = [
		
		{quote:"vient de se faire intuber une sonde anale."},
		
		{quote:"constate 2h manquantes sur son horaire, que s\'est-il passé ?"},
    
		{quote:"vient de se faire jeter de la soucoupe : trop con."},
    
		{quote:"laisse les extraterrestres sans voix : quel est cet individu ?"},
    
		{quote:"se fait prélever son ADN en vue d\'être croisé avec celui d\'une vache."},
    
		{quote:"rentre chez lui avec un laser à rayonnement électromagnétique."},
    
		{quote:"reprend connaissance dans une forêt, nu et déshydraté."},
    
		{quote:"remarque une discrète cicatrice derrière son oreille."},    
	];

	var dquote = quotes[Math.floor(Math.random() * quotes.length)];

	var html = '<p>'+dquote['quote']+'</p>';
		

	$('#random_quotes').html(html);
}
