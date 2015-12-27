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
aliceblue, 240 248 255\n\
steelblue, 70 130 180\n\
steelblue 1,99 184 255\n\
steelblue 2,92 172 238\n\
steelblue 3,79 148 205\n\
steelblue 4,54 100 139\n\
lightskyblue,135 206 250\n\
lightskyblue 1,176 226 255\n\
lightskyblue 2,164 211 238\n\
lightskyblue 3,141 182 205\n\
lightskyblue 4,96 123 139\n\
skyblue 1,135 206 255\n\
skyblue 2,126 192 238\n\
skyblue 3,108 166 205\n\
skyblue 4,74 112 139\n\
skyblue,135 206 235\n\
deepskyblue 1,0 191 255\n\
deepskyblue 2,0 178 238\n\
deepskyblue 3,0 154 205\n\
deepskyblue 4,0 104 139\n\
peacock,51 161 201\n\
lightblue,173 216 230\n\
lightblue 1,191 239 255\n\
lightblue 2,178 223 238\n\
lightblue 3,154 192 205\n\
lightblue 4,104 131 139\n\
powderblue,176 224 230\n\
cadetblue 1,152 245 255\n\
cadetblue 2,142 229 238\n\
cadetblue 3,122 197 205\n\
cadetblue 4,83 134 139\n\
turquoise 1,0 245 255\n\
turquoise 2,0 229 238\n\
turquoise 3,0 197 205\n\
turquoise 4,0 134 139\n\
cadetblue,95 158 160\n\
darkturquoise,0 206 209\n\
azure 1,240 255 255\n\
azure 2,224 238 238\n\
azure 3,193 205 205\n\
azure 4,131 139 139\n\
lightcyan 1,224 255 255\n\
lightcyan 2,209 238 238\n\
lightcyan 3,180 205 205\n\
lightcyan 4,122 139 139\n\
paleturquoise 1,187 255 255\n\
paleturquoise 2,174 238 238\n\
paleturquoise 3,150 205 205\n\
paleturquoise 4,102 139 139\n\
darkslategray,47 79 79\n\
darkslategray 1,151 255 255\n\
darkslategray 2,141 238 238\n\
darkslategray 3,121 205 205\n\
darkslategray 4,82 139 139\n\
cyan,0 255 255\n\
cyan 2,0 238 238\n\
cyan 3,0 205 205\n\
cyan 4,0 139 139\n\
teal,0 128 128\n\
mediumturquoise,72 209 204\n\
lightseagreen,32 178 170\n\
manganeseblue,3 168 158\n\
turquoise,64 224 208\n\
coldgrey,128 138 135\n\
turquoiseblue,0 199 140\n\
aquamarine 1,127 255 212\n\
aquamarine 2,118 238 198\n\
aquamarine 3,102 205 170\n\
aquamarine 4,69 139 116\n\
mediumspringgreen,0 250 154\n\
mintcream,245 255 250\n\
springgreen 0,0 255 127\n\
springgreen 1,0 238 118\n\
springgreen 2,0 205 102\n\
springgreen 3,0 139 69\n\
mediumseagreen,60 179 113\n\
seagreen 1,84 255 159\n\
seagreen 2,78 238 148\n\
seagreen 3,67 205 128\n\
seagreen 4,46 139 87\n\
emeraldgreen,0 201 87\n\
mint,189 252 201\n\
cobaltgreen,61 145 64\n\
honeydew 1,240 255 240\n\
honeydew 2,224 238 224\n\
honeydew 3,193 205 193\n\
honeydew 4,131 139 131\n\
darkseagreen,143 188 143\n\
darkseagreen 1,193 255 193\n\
darkseagreen 2,180 238 180\n\
darkseagreen 3,155 205 155\n\
darkseagreen 4,105 139 105\n\
palegreen,152 251 152\n\
palegreen 1,154 255 154\n\
palegreen 2,144 238 144\n\
palegreen 3,124 205 124\n\
palegreen 4,84 139 84\n\
limegreen,50 205 50\n\
forestgreen,34 139 34\n\
green 1,0 255 0\n\
green 2,0 238 0\n\
green 3,0 205 0\n\
green 4,0 139 0\n\
green,0 128 0\n\
darkgreen,0 100 0\n\
sapgreen,48 128 20\n\
lawngreen,124 252 0\n\
chartreuse 1,127 255 0\n\
chartreuse 2,118 238 0\n\
chartreuse 3,102 205 0\n\
chartreuse 4,69 139 0\n\
greenyellow,173 255 47\n\
darkolivegreen 1,202 255 112\n\
darkolivegreen 2,188 238 104\n\
darkolivegreen 3,162 205 90\n\
darkolivegreen 4,110 139 61\n\
darkolivegreen,85 107 47\n\
olivedrab,107 142 35\n\
olivedrab 1,192 255 62\n\
olivedrab 2,179 238 58\n\
olivedrab 3,154 205 50\n\
olivedrab 4,105 139 34\n\
ivory 1,255 255 240\n\
ivory 2,238 238 224\n\
ivory 3,205 205 193\n\
ivory 4,139 139 131\n\
beige,245 245 220\n\
lightyellow 1,255 255 224\n\
lightyellow 2,238 238 209\n\
lightyellow 3,205 205 180\n\
lightyellow 4,139 139 122\n\
lightgoldenrodyellow,250 250 210\n\
yellow 1,255 255 0\n\
yellow 2,238 238 0\n\
yellow 3,205 205 0\n\
yellow 4,139 139 0\n\
warmgrey,128 128 105\n\
olive,128 128 0\n\
darkkhaki,189 183 107\n\
khaki 1,255 246 143\n\
khaki 2,238 230 133\n\
khaki 3,205 198 115\n\
khaki 4,139 134 78\n\
khaki,240 230 140\n\
palegoldenrod,238 232 170\n\
lemonchiffon 1,255 250 205\n\
lemonchiffon 2,238 233 191\n\
lemonchiffon 3,205 201 165\n\
lemonchiffon 4,139 137 112\n\
lightgoldenrod,255 236 139\n\
lightgoldenrod 2,238 220 130\n\
lightgoldenrod 3,205 190 112\n\
lightgoldenrod 4,139 129 76\n\
banana,227 207 87\n\
gold 1,255 215 0\n\
gold 2,238 201 0\n\
gold 3,205 173 0\n\
gold 4,139 117 0\n\
cornsilk 1,255 248 220\n\
cornsilk 2,238 232 205\n\
cornsilk 3,205 200 177\n\
cornsilk 4,139 136 120\n\
goldenrod,218 165 32\n\
goldenrod 1,255 193 37\n\
goldenrod 2,238 180 34\n\
goldenrod 3,205 155 29\n\
goldenrod 4,139 105 20\n\
darkgoldenrod,184 134 11\n\
darkgoldenrod 1,255 185 15\n\
darkgoldenrod 2,238 173 14\n\
darkgoldenrod 3,205 149 12\n\
darkgoldenrod 4,139 101 8\n\
orange 1,255 165 0\n\
orange 2,238 154 0\n\
orange 3,205 133 0\n\
orange 4,139 90 0\n\
floralwhite,255 250 240\n\
oldlace,253 245 230\n\
wheat,245 222 179\n\
wheat 1,255 231 186\n\
wheat 2,238 216 174\n\
wheat 3,205 186 150\n\
wheat 4,139 126 102\n\
moccasin,255 228 181\n\
papayawhip,255 239 213\n\
blanchedalmond,255 235 205\n\
navajowhite 1,255 222 173\n\
navajowhite 2,238 207 161\n\
navajowhite 3,205 179 139\n\
navajowhite 4,139 121 94\n\
eggshell,252 230 201\n\
tan,210 180 140\n\
brick,156 102 31\n\
cadmiumyellow,255 153 18\n\
antiquewhite,250 235 215\n\
antiquewhite 1,255 239 219\n\
antiquewhite 2,238 223 204\n\
antiquewhite 3,205 192 176\n\
antiquewhite 4,139 131 120\n\
burlywood,222 184 135\n\
burlywood 1,255 211 155\n\
burlywood 2,238 197 145\n\
burlywood 3,205 170 125\n\
burlywood 4,139 115 85\n\
bisque 1,255 228 196\n\
bisque 2,238 213 183\n\
bisque 3,205 183 158\n\
bisque 4,139 125 107\n\
melon,227 168 105\n\
carrot,237 145 33\n\
darkorange,255 140 0\n\
darkorange 1,255 127 0\n\
darkorange 2,38 118 0\n\
darkorange 3,205 102 0\n\
darkorange 4,139 69 0\n\
orange,255 128 0\n\
tan 1,255 165 79\n\
tan 2,238 154 73\n\
tan 3,205 133 63\n\
tan 4,139 90 43\n\
linen,250 240 230\n\
eachpuff 1,255 218 185\n\
peachpuff 2,238 203 173\n\
peachpuff 3,205 175 149\n\
peachpuff 4,139 119 101\n\
seashell 1,255 245 238\n\
seashell 2,238 229 222\n\
seashell 3,205 197 191\n\
seashell 4,139 134 130\n\
sandybrown,244 164 96\n\
rawsienna,199 97 20\n\
chocolate,210 105 30\n\
chocolate 1,255 127 36\n\
chocolate 2,238 118 33\n\
chocolate 3,205 102 29\n\
saddlebrown,139 69 19\n\
ivoryblack,41 36 33\n\
flesh,255 125 64\n\
cadmiumorange,255 97 3\n\
burntsienna,138 54 15\n\
sienna,160 82 45\n\
sienna 1,255 130 71\n\
sienna 2,238 121 66\n\
sienna 3,205 104 57\n\
sienna 4,139 71 38\n\
lightsalmon 1,255 160 122\n\
lightsalmon 2,238 149 114\n\
lightsalmon 3,205 129 98\n\
lightsalmon 4,139 87 66\n\
coral,255 127 80\n\
orangered 1,255 69 0\n\
orangered 2,238 64 0\n\
orangered 3,205 55 0\n\
orangered 4,139 37 0\n\
sepia,94 38 18\n\
darksalmon,233 150 122\n\
salmon 1,255 140 105\n\
salmon 2,238 130 98\n\
salmon 3,205 112 84\n\
salmon 4,139 76 57\n\
coral 1,255 114 86\n\
coral 2,238 106 80\n\
coral 3,205 91 69\n\
coral 4,139 62 47\n\
burntumber,138 51 36\n\
tomato 1,255 99 71\n\
tomato 2,238 92 66\n\
tomato 3,205 79 57\n\
tomato 4,139 54 38\n\
salmon,250 128 114\n\
mistyrose 1,255 228 225\n\
mistyrose 2,238 213 210\n\
mistyrose 3,205 183 181\n\
mistyrose 4,139 125 123\n\
snow 1,255 250 250\n\
snow 2,238 233 233\n\
snow 3,205 201 201\n\
snow 4,139 137 137\n\
rosybrown,188 143 143\n\
rosybrown 1,255 193 193\n\
rosybrown 2,238 180 180\n\
rosybrown 3,205 155 155\n\
rosybrown 4,139 105 105\n\
lightcoral,240 128 128\n\
indianred,205 92 92\n\
indianred 1,255 106 106\n\
indianred 2,238 99 99\n\
indianred 4,139 58 58\n\
indianred 3,205 85 85\n\
brown,165 42 42\n\
brown 1,255 64 64\n\
brown 2,238 59 59\n\
brown 3,205 51 51\n\
brown 4,139 35 35\n\
firebrick,178 34 34\n\
firebrick 1,255 48 48\n\
firebrick 2,238 44 44\n\
firebrick 3,205 38 38\n\
firebrick 4,139 26 26\n\
red 1,255 0 0\n\
red 2,238 0 0\n\
red 3,205 0 0\n\
red 4,139 0 0\n\
maroon,128 0 0\n\
white,255 255 255\n\
white smoke,245 245 245\n\
gainsboro,220 220 220\n\
lightgrey,211 211 211\n\
silver,192 192 192\n\
darkgray,169 169 169\n\
gray,128 128 128\n\
"
);