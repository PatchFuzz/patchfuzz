function hasChildNodes() {
  
  try {
    hasChildNodes();
  } catch {
    
  }

  
  return RegExp(".|.").test("");
}
hasChildNodes();

function hasLeafNode() {
  
  try {
    hasLeafNode();
  } catch {
    
  }

  
  return RegExp(".").test("");
}
hasLeafNode();
