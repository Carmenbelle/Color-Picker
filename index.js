let colorIndicator = document.getElementById('color-indicator');
const colorPicker = new iro.ColorPicker('#color-picker');

colorPicker.on('color:change', function(color){
    colorIndicator.style.backgroundColor = color.hexString;
});
