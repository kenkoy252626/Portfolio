function showDiv(sectionId) {
    var section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
