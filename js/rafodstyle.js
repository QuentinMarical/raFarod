//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bFarod\b/g, "Rafod");
	v = v.replace(/\bfarod\b/g, "rafod");
	v = v.replace(/\bFAROD\b/g, "RAFOD");
	v = v.replace(/\bRofad\b/g, "Rafod");
	v = v.replace(/\brofad\b/g, "rafod");
	v = v.replace(/\bROFAD\b/g, "RAFOD");
	v = v.replace(/\bfarodgames\b/g, "rafodgammslà");
	v = v.replace(/\bFarodGames\b/g, "RafodGammsLà");
	v = v.replace(/\bFarod Games\b/g, "Rafod Gamms Là");
	v = v.replace(/\bBonjour à toutes et à tous et bienvenue pour une nouvelle vidéo\b/g, "Bonjour à tous les amis, c'est ... RAFOD!");
	v = v.replace(/\bPlagieur Professionnel\b/g, "SLT À TOUSSE LES ZAMI C RAFOD !!!!");
	v = v.replace(/\bMontpellier, France\b/g, "dan ton gro q");
	v = v.replace(/\bInscrit en janvier 2014\b/g, "Inscrit en mars 2017");
	v = v.replace(/\bM'id sur une photo où j'apparais pas = bloque\b/g, "SLT A TOUS LES AMIS C RAFOD");
	v = v.replace(/\bYoutuber Amateur · Pro Nintendo\b/g, "Youtuber Cancer · Pro Sony");
	
	
	textNode.nodeValue = v;
}
