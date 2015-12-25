Sensehat = new Meteor.Collection("sensehat");
// coming soon.. probably will just use the same collection for simplicity





multiStringToRgbColor = function(str){
  result = []
  str.split('\n').filter(function(s){
    result.push(stringToRgbColor(s));
  });
  return result;
}

stringToRgbColor = function(str,colorOnly){
  if(str == '' || typeof str == "undefined"){
    return false;
  }
  var r = str.split(',');
  // work with r[1]

  var arr = r[1].split(' ');
  var color = []
  arr.filter(function(e){ 
    if(e != ''){
      color.push(parseInt(e));
    }
  });

  // accepts a string like
  // pink 4   139 99  108
  // i.e.
  // <color name> <TAB> rrr ggg bbb
  var name = r[0];
  if(colorOnly){
    return color;
  }else{
    return {name: name,rgb:color};
  }
};


RgbColors = multiStringToRgbColor(
"indian red,176 23 31\n\
crimson,220 20 60\n\
lightpink,255 182 193\n\
lightpink 1,255 174 185\n\
lightpink 2,238 162 173\n\
lightpink 3,205 140 149\n\
lightpink 4,139 95 101\n\
pink,255 192 203\n\
pink 1,255 181 197\n\
pink 2,238 169 184\n\
pink 3,205 145 158\n\
pink 4,139 99 108\n\
palevioletred,219 112 147 \n\
palevioletred 1,255 130 171\n\
palevioletred 2,238 121 159\n\
palevioletred 3,205 104 137\n\
palevioletred 4,139 71 93\n\
lavenderblush 1,255 240 245\n\
lavenderblush 2,238 224 229\n\
lavenderblush 3,205 193 197\n\
lavenderblush 4,139 131 134\n\
violetred 1,255 62 150\n\
violetred 2,238 58 140\n\
violetred 3,205 50 120\n\
violetred 4,139 34 82\n\
hotpink,255  105 180 \n\
hotpink 1,255 110 180\n\
hotpink 2,238 106 167\n\
hotpink 3,205 96 144\n\
hotpink 4,139 58 98\n\
raspberry,135 38 87\n\
deeppink 1,255 20 147\n\
deeppink 2,238 18 137\n\
deeppink 3,205 16 118\n\
deeppink 4,139 10 80\n\
maroon 1,255 52 179\n\
maroon 2,238 48 167\n\
maroon 3,205 41 144\n\
maroon 4,139 28 98\n\
mediumvioletred,199 21 133\n\
violetred,208 32 144\n\
orchid,218 112 214\n\
orchid 1,255 131 250\n\
orchid 2,238 122 233\n\
orchid 3,205 105 201\n\
orchid 4,139 71 137\n\
thistle,216 191 216\n\
thistle 1,255 225 255\n\
thistle 2,238 210 238\n\
thistle 3,205 181 205\n\
thistle 4,139 123 139\n\
plum 1,255 187 255\n\
plum 2,238 174 238\n\
plum 3,205 150 205\n\
plum 4,139 102 139\n\
plum,221 160 221\n\
violet,238 130 238\n\
fuchsia,255 0 255\n\
magenta 2,238 0 238\n\
magenta 3,205 0 205\n\
darkmagenta,139 0 139\n\
purple*,128 0 128\n\
mediumorchid,186 85 211\n\
mediumorchid 1,224 102 255\n\
mediumorchid 2,209 95 238\n\
mediumorchid 3,180 82 205\n\
mediumorchid 4,122 55 139\n\
darkviolet,148 0 211\n\
darkorchid,153 50 204\n\
darkorchid 1,191 62 255\n\
darkorchid 2,178 58 238\n\
darkorchid 3,154 50 205\n\
darkorchid 4,104 34 139\n\
indigo,75 0 130\n\
blueviolet,138 43 226\n\
purple 1,155 48 255\n\
purple 2,145 44 238\n\
purple 3,125 38 205\n\
purple 4,85 26 139\n\
mediumpurple,147 112 219\n\
mediumpurple 1,171 130 255\n\
mediumpurple 2,159 121 238\n\
mediumpurple 3,137 104 205\n\
mediumpurple 4,93 71 139\n\
darkslateblue,72 61 139\n\
lightslateblue,132 112 255\n\
mediumslateblue,123 104 238\n\
slateblue,106 90 205\n\
slateblue 1,131 111 255\n\
slateblue 2,122 103 238\n\
slateblue 3,105 89 205\n\
slateblue 4,71 60 139\n\
ghostwhite,248 248 255\n\
lavender,230 230 250\n\
blue*,0 0 255\n\
blue 2,0 0 238\n\
mediumblue,0 0 205\n\
darkblue,0 0 139\n\
navy*,0 0 128\n\
midnightblue,25 25 112\n\
cobalt,61 89 171\n\
royalblue,65 105 225\n\
royalblue 1,72 118 255\n\
royalblue 2,67 110 238\n\
royalblue 3,58 95 205\n\
royalblue 4,39 64 139\n\
cornflowerblue,100 149 237\n\
lightsteelblue,176 196 222\n\
lightsteelblue 1,202 225 255\n\
lightsteelblue 2,188 210 238\n\
lightsteelblue 3,162 181 205\n\
lightsteelblue 4,110 123 139\n\
lightslategray,119 136 153\n\
slategray,112 128 144\n\
slategray 1,198 226 255\n\
slategray 2,185 211 238\n\
slategray 3,159 182 205\n\
slategray 4,108 123 139\n\
dodgerblue 1,30 144 255\n\
dodgerblue 2,28 134 238\n\
dodgerblue 3,24 116 205\n\
dodgerblue 4,16 78 139\n\
"
);
