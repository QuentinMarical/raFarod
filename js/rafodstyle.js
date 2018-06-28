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
	v = v.replace(/\bfarodgames\b/g, "rafodgamms");
	v = v.replace(/\bFarodGames\b/g, "RafodGamms");
	v = v.replace(/\bFarod Games\b/g, "Rafod Gamms");
	v = v.replace(/\bBonjour à toutes et à tous et bienvenue pour une nouvelle vidéo\b/g, "Bonjour à tous les amis, c'est ... RAFOD!");
	v = v.replace(/\bou encore Tueur de Toriel\b/g, "ou encore Plagiat de Paulok");
	v = v.replace(/\bPro Nintendo\b/g, "Pro Sega");
	
	textNode.nodeValue = v;
}