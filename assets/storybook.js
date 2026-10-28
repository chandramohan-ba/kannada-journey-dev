/* =====================================================================
   KANNADA JOURNEY: STORYBOOK PROGRAMS PAGE  (storybook.js)
   ---------------------------------------------------------------------
   1) IMAGES : the list of picture slots. Edit it to swap any picture.
   2) The drawings (SVG) that appear when a slot is left empty.
   3) The page-turning code (no need to touch it).

   Characters:  Anand = the teacher (white hair, cream kurta, glasses)
                Rahul = the learner (dark hair, indigo shirt)
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) PICTURE SLOTS
   Leave a slot as "" to show the built-in drawing.
   To use your own picture, put the file path between the quotes, e.g.
       program1: "images/program1.jpg",
   If the file cannot be loaded, the built-in drawing is shown instead.
   --------------------------------------------------------------------- */
var IMAGES = {
  cover:    "",   // Programs page cover: Anand and Rahul at sunrise
  overview: "",   // Programs page: the winding road
  finale:   "",   // last page of every story: the village gate

  /* ---- Programs page: one picture for each program ---- */
  prog1:    "",   // Program 1: Kannada First Steps (veranda, speaking about "I")
  prog2:    "",   // Program 2: Kannada in Context (market, anyone, questions)
  prog3:    "",   // Program 3: Kannada in Flow (pavilion, hourglasses)
  prog4:    "",   // Program 4: Word by Word (shelves of word jars)
  prog5:    "",   // Program 5: Meet the Letters (veranda, the first letter)
  prog6:    "",   // Program 6: Kannada with Clarity (library)
  prog7:    "",   // Program 7: Kannada on the Page (writing desk)
  prog8:    "",   // Program 8: Rich Conversations (banyan tree)
  prog9:    "",   // Program 9: Unstoppable (stage)
  alumni:   "",   // Alumni movie night in the courtyard
  stageSpeak:  "",   // Stage 1 signpost (Programs 1-4)
  stageRead:   "",   // Stage 2 signpost (Programs 5-8)
  stageBelong: "",   // Stage 3: alumni courtyard

  /* ---- Home (index.html) ---- */
  home1:    "",   // Home: set up under PHOTOS below (picture with words on it)
  home2:    "",   // three stepping stones: Practical, Step by step, Connection
  home3:    "",   // signpost with seven arrows (the seven steps)

  /* ---- Who It's For (who-its-for.html) ---- */
  who0:     "",
  whoHealth:"",
  whoIT:    "",
  whoYoga:  "",
  whoFamily:"",

  /* ---- How It Works (how-it-works.html) ---- */
  how0:     "",   // signpost with three stages
  how1:     "",   // the places where Kannada is used

  /* ---- Everyday Kannada (everyday-kannada.html) ---- */
  ev0:      "",
  evPeople: "",
  evDaily:  "",
  evWork:   "",
  evHealth: "",

  /* ---- About (about.html) ---- */
  about0:   "",

  /* ---- Contact (contact.html) ---- */
  contact0: "",
  contact1: ""    // Contact page, 2nd page (the enquiry form)
};

/* ---------------------------------------------------------------------
   ILLUSTRATIONS (your painted pictures, with words written over them)
   The page shows your picture and writes the speech bubbles and signs on
   top of it. If a picture file is missing, the built-in drawing is shown.
   Files go in the folder assets/images/ :
     home1     Home page, page 1 (the welcome)
     home2     Home page, page 2 (three key differentiators)
     home3     Home page, page 3 (your journey in seven steps)
     contact0  Contact page, page 1 (teacher invites the student to fill the form)
     contact1  Contact page, page 2 (student fills the form)
   --------------------------------------------------------------------- */
var PHOTOS = {
  home1:    { src: "assets/images/home-welcome.jpg" },
  home2:    { src: "assets/images/home-usp-threekeydifferentiators.jpg" },
  home3:    { src: "assets/images/home-sevenstepjourney.jpg" },
  contact0: { src: "assets/images/contact-teachersuggestingformfilling.jpg" },
  contact1: { src: "assets/images/contact-studentfillingform.jpg" },
  about0:    { src: "assets/images/about-main.jpg" },
  aboutMeasure:    { src: "assets/images/about-measure.jpg" },
  aboutWelcome:    { src: "assets/images/about-welcome.jpg" },
  who0:    { src: "assets/images/whoitsfor-main.jpg" },
  whoHealth:    { src: "assets/images/whoitsfor-health.jpg" },
  whoIT:    { src: "assets/images/whoitsfor-it.jpg" },
  whoYoga:    { src: "assets/images/whoitsfor-yoga.jpg" },
  whoFamily:    { src: "assets/images/whoitsfor-family.jpg" },
  finale:    { src: "assets/images/whoitsfor-welcome.jpg" },
  howMain:    { src: "assets/images/howitworks-main.jpg" },
  howStage1:    { src: "assets/images/howitworks-stage1.jpg" },
  howStage2:    { src: "assets/images/howitworks-stage2.jpg" },
  howStage3:    { src: "assets/images/howitworks-stage3.jpg" },
  howWelcome:    { src: "assets/images/howitworks-welcome.jpg" },
  programsMain:    { src: "assets/images/programs-main.jpg" },
  programsOverview:    { src: "assets/images/programs-overview.jpg" },
  programsStage1:    { src: "assets/images/programs-stage1.jpg" },
  programsProgram1:    { src: "assets/images/programs-program1.jpg" },
  programsProgram1Detail:    { src: "assets/images/programs-program1-detail.jpg" },  
  programsProgram2:    { src: "assets/images/programs-program2.jpg" },
  programsProgram2Detail:    { src: "assets/images/programs-program2-detail.jpg" },  
  programsProgram3:    { src: "assets/images/programs-program3.jpg" },
  programsProgram3Detail:    { src: "assets/images/programs-program3-detail.jpg" },  
  programsProgram4:    { src: "assets/images/programs-program4.jpg" },
  programsProgram4Detail:    { src: "assets/images/programs-program4-detail.jpg" },
  programsStage2:    { src: "assets/images/programs-stage2.jpg" },
  programsProgram5:    { src: "assets/images/programs-program5.jpg" },
  programsProgram5Detail:    { src: "assets/images/programs-program5-detail.jpg" },  
  programsProgram6:    { src: "assets/images/programs-program6.jpg" },
  programsProgram6Detail:    { src: "assets/images/programs-program6-detail.jpg" },  
  programsProgram7:    { src: "assets/images/programs-program7.jpg" },
  programsProgram7Detail:    { src: "assets/images/programs-program7-detail.jpg" },  
  programsProgram8:    { src: "assets/images/programs-program8.jpg" },
  programsProgram8Detail:    { src: "assets/images/programs-program8-detail.jpg" },
  /* programsStage3:    { src: "assets/images/programs-stage3.jpg" } */
  
  programsProgram9:    { src: "assets/images/programs-program9.jpg" },
  programsProgram9Detail:    { src: "assets/images/programs-program9-detail.jpg" }
};

/* ---------------------------------------------------------------------
   ENQUIRY FORM (contact.html): saves each enquiry as a row in Supabase
   ---------------------------------------------------------------------
   Form field                        ->  Supabase column
   Full name                         ->  name
   Email address                     ->  email
   Phone (optional)                  ->  phone
   I am a                            ->  category
   Current Kannada level             ->  level
   What would you like to achieve?   ->  goal
   Additional message                ->  details

   table : the name of YOUR Supabase table. Change it here if it is not
           "enquiries".
   The publishable key is designed to sit in a web page. It is safe only
   because the table is protected with Row Level Security that allows
   INSERT (adding rows) but not reading. See supabase-setup.sql.
   --------------------------------------------------------------------- */
var ENQUIRY = {
  supabaseUrl: "https://ghkakclkobpnwbeafmbu.supabase.co",
  supabaseKey: "sb_publishable_rZqDhPziVRuvytucY0rv4Q_UNL-JhDZ",
  table: "launch_list",
  successMessage: ""      /* optional: leave empty to use the standard thank-you */
};

/* ---------------------------------------------------------------------
   2) DRAWINGS
   Palette: paper #f2dfb3  ink #3a2210  red #b5301d  gold #dd9b16
            green #44703a  indigo #27386b
   --------------------------------------------------------------------- */
var INK = "#3a2210";
var SCENES = {};

/* ---------- Characters ----------
   fig(x, y, scale, options)
   x,y   : position of the feet (standing) or of the seat (sitting)
   who   : "anand" | "rahul" | "local"
   pose  : "stand" | "sit" (cross-legged) | "bench" (sitting on a seat)
   l, r  : hand positions [x, y] relative to the figure, left/right side
   top, low, hair : colours.   f : true for a woman.
---------------------------------------------------------------------- */
function fig(x, y, s, o) {
  o = o || {};
  var who = o.who || "local";
  var pose = o.pose || "stand";
  var skin = o.skin || "#e0a878";
  var top = o.top || (who === "anand" ? "#f6ecd2" : "#27386b");
  var low = o.low || (who === "anand" ? "#efe3c4" : "#5a3a22");
  var hair = o.hair || (who === "anand" ? "#eeeeee" : "#2a1a10");
  var sy, hy, g = "";

  if (pose === "stand") {
    sy = -104; hy = -136;
    if (o.f) {
      g += '<path d="M-20 -108 Q0 -116 20 -108 L26 0 L-26 0 Z" fill="' + top + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>';
    } else {
      g += '<path d="M-17 -44 L17 -44 L21 0 L-21 0 Z" fill="' + low + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>';
      g += '<path d="M-21 -110 Q0 -118 21 -110 L26 ' + (who === "anand" ? -26 : -42) + ' L-26 ' + (who === "anand" ? -26 : -42) + ' Z" fill="' + top + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>';
    }
  } else {
    sy = -72; hy = -104;
    if (pose === "bench") {
      g += '<rect x="-24" y="-22" width="48" height="14" rx="6" fill="' + low + '" stroke="' + INK + '" stroke-width="2.6"/>';
      g += '<rect x="-24" y="-12" width="16" height="44" rx="5" fill="' + low + '" stroke="' + INK + '" stroke-width="2.6"/>';
      g += '<rect x="8" y="-12" width="16" height="44" rx="5" fill="' + low + '" stroke="' + INK + '" stroke-width="2.6"/>';
    } else {
      g += '<ellipse cx="0" cy="-12" rx="50" ry="14" fill="' + low + '" stroke="' + INK + '" stroke-width="2.6"/>';
    }
    g += '<path d="M-21 -78 Q0 -86 21 -78 L28 -16 L-28 -16 Z" fill="' + top + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>';
  }

  if (who === "anand") {
    g += '<path d="M-20 ' + (sy - 4) + ' L-4 ' + (sy - 6) + ' L22 ' + (sy + 54) + ' L8 ' + (sy + 58) + ' Z" fill="#dd9b16" stroke="' + INK + '" stroke-width="2"/>';
  }

  function arm(side, h) {
    var sx = side * 20;
    var cx = (sx + h[0]) / 2, cy = (sy + h[1]) / 2 + 8;
    var p = 'M' + sx + ' ' + sy + ' Q' + cx + ' ' + cy + ' ' + h[0] + ' ' + h[1];
    return '<path d="' + p + '" fill="none" stroke="' + INK + '" stroke-width="14" stroke-linecap="round"/>' +
      '<path d="' + p + '" fill="none" stroke="' + top + '" stroke-width="9" stroke-linecap="round"/>' +
      '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="6" fill="' + skin + '" stroke="' + INK + '" stroke-width="2.4"/>';
  }
  var dl = pose === "stand" ? [-30, -52] : [-34, -24];
  var dr = pose === "stand" ? [30, -52] : [34, -24];
  g += arm(-1, o.l || dl) + arm(1, o.r || dr);
  if (o.extra) g += o.extra;

  /* head */
  g += '<circle cx="0" cy="' + hy + '" r="19" fill="' + skin + '" stroke="' + INK + '" stroke-width="2.6"/>';
  g += '<path d="M-19 ' + (hy - 3) + ' Q-21 ' + (hy - 25) + ' 0 ' + (hy - 25) + ' Q21 ' + (hy - 25) + ' 19 ' + (hy - 3) + ' Q14 ' + (hy - 14) + ' 0 ' + (hy - 14) + ' Q-14 ' + (hy - 14) + ' -19 ' + (hy - 3) + ' Z" fill="' + hair + '" stroke="' + INK + '" stroke-width="2"/>';
  if (o.f) {
    g += '<circle cx="0" cy="' + (hy - 26) + '" r="8" fill="' + hair + '" stroke="' + INK + '" stroke-width="2"/>';
  }
  g += '<circle cx="-7" cy="' + (hy - 1) + '" r="1.9" fill="' + INK + '"/><circle cx="7" cy="' + (hy - 1) + '" r="1.9" fill="' + INK + '"/>';
  g += '<path d="M-6 ' + (hy + 8) + ' Q0 ' + (hy + 14) + ' 6 ' + (hy + 8) + '" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round"/>';
  if (who === "anand") {
    g += '<circle cx="-7" cy="' + (hy - 1) + '" r="6" fill="none" stroke="' + INK + '" stroke-width="1.8"/><circle cx="7" cy="' + (hy - 1) + '" r="6" fill="none" stroke="' + INK + '" stroke-width="1.8"/><path d="M-1 ' + (hy - 1) + ' L1 ' + (hy - 1) + '" stroke="' + INK + '" stroke-width="1.8"/>';
    g += '<path d="M-9 ' + (hy + 5) + ' Q0 ' + (hy + 2) + ' 9 ' + (hy + 5) + ' Q0 ' + (hy + 8) + ' -9 ' + (hy + 5) + ' Z" fill="#dcdcdc" stroke="' + INK + '" stroke-width="1.2"/>';
  }
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + g + '</g>';
}

/* Rolled scroll tag with text */
function scrollTag(x, y, w, h, text, size, fill) {
  fill = fill || "#fff3cf";
  return '<g>' +
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="' + INK + '" stroke-width="2.5"/>' +
    '<ellipse cx="' + x + '" cy="' + (y + h / 2) + '" rx="7" ry="' + (h / 2) + '" fill="#e0b25e" stroke="' + INK + '" stroke-width="2.5"/>' +
    '<ellipse cx="' + (x + w) + '" cy="' + (y + h / 2) + '" rx="7" ry="' + (h / 2) + '" fill="#e0b25e" stroke="' + INK + '" stroke-width="2.5"/>' +
    '<text class="sb-svg-text" x="' + (x + w / 2) + '" y="' + (y + h / 2 + size / 3) + '" font-size="' + size + '" text-anchor="middle" fill="' + INK + '" font-weight="700">' + text + '</text>' +
    '</g>';
}

/* Speech bubble. tail: "l" (bottom-left) or "r" (bottom-right) */
function bubble(x, y, w, h, text, size, tail) {
  var tx = tail === "r" ? x + w - 40 : x + 18;
  return '<g>' +
    '<path d="M' + tx + ' ' + (y + h - 2) + ' L' + (tail === "r" ? tx + 24 : tx - 4) + ' ' + (y + h + 20) + ' L' + (tx + (tail === "r" ? 4 : 28)) + ' ' + (y + h - 2) + ' Z" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="14" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<rect x="' + (tx + 1) + '" y="' + (y + h - 5) + '" width="26" height="8" fill="#fff7e2"/>' +
    '<text class="sb-svg-text" x="' + (x + w / 2) + '" y="' + (y + h / 2 + size / 3) + '" font-size="' + size + '" text-anchor="middle" fill="' + INK + '" font-weight="700">' + text + '</text>' +
    '</g>';
}

/* Hourglass. mode: "run" (sand still falling) or "done" (all sand below) */
function hourglass(cx, cy, mode) {
  var sand = mode === "run"
    ? '<path d="M-10 -24 L10 -24 L3 -6 L-3 -6 Z" fill="#dd9b16"/><path d="M0 -4 L0 14" stroke="#dd9b16" stroke-width="2"/><path d="M-6 26 L6 26 L2 16 L-2 16 Z" fill="#dd9b16"/>'
    : '<path d="M-12 26 L12 26 L5 8 L-5 8 Z" fill="#dd9b16"/>';
  return '<g transform="translate(' + cx + ' ' + cy + ')">' +
    '<path d="M-15 -30 L15 -30 L3 0 L15 30 L-15 30 L-3 0 Z" fill="#fff7e2" fill-opacity=".85" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    sand +
    '<rect x="-19" y="-36" width="38" height="7" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<rect x="-19" y="29" width="38" height="7" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.2"/>' +
    '</g>';
}

/* Small pill label */
function pill(cx, y, w, text, size, fill, color) {
  return '<g><rect x="' + (cx - w / 2) + '" y="' + y + '" width="' + w + '" height="24" rx="12" fill="' + (fill || "#fff7e2") + '" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<text class="sb-svg-text" x="' + cx + '" y="' + (y + 17) + '" font-size="' + size + '" text-anchor="middle" fill="' + (color || INK) + '" font-weight="700">' + text + '</text></g>';
}

/* Market stall with a striped awning */
function stall(x, y, w, c1, fruitColors) {
  var st = "", n = Math.round(w / 16), sw = w / n, i, f = "";
  for (i = 0; i < n; i++) {
    st += '<path d="M' + (x + i * sw) + ' ' + y + ' L' + (x + (i + 1) * sw) + ' ' + y + ' L' + (x + (i + 1) * sw) + ' ' + (y + 24) + ' Q' + (x + (i + .5) * sw) + ' ' + (y + 36) + ' ' + (x + i * sw) + ' ' + (y + 24) + ' Z" fill="' + (i % 2 ? "#fff7e2" : c1) + '" stroke="' + INK + '" stroke-width="2"/>';
  }
  for (i = 0; i < 6; i++) {
    f += '<circle cx="' + (x + 18 + i * ((w - 36) / 5)) + '" cy="' + (y + 84) + '" r="10" fill="' + fruitColors[i % fruitColors.length] + '" stroke="' + INK + '" stroke-width="2"/>';
  }
  return '<rect x="' + (x + 4) + '" y="' + y + '" width="7" height="110" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    '<rect x="' + (x + w - 11) + '" y="' + y + '" width="7" height="110" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    st +
    '<rect x="' + (x + 8) + '" y="' + (y + 90) + '" width="' + (w - 16) + '" height="26" rx="3" fill="#8a5a2c" stroke="' + INK + '" stroke-width="2.4"/>' + f;
}

function wrap(inner) {
  return '<svg viewBox="0 0 480 440" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img">' + inner + '</svg>';
}

/* ---------------- COVER ---------------- */
SCENES.cover = function () {
  var rays = "", i, a, b;
  for (i = 0; i < 18; i++) {
    a = i * Math.PI / 9; b = (i + .45) * Math.PI / 9;
    rays += '<path d="M240 170 L' + (240 + 260 * Math.cos(a)).toFixed(1) + ' ' + (170 + 260 * Math.sin(a)).toFixed(1) + ' L' + (240 + 260 * Math.cos(b)).toFixed(1) + ' ' + (170 + 260 * Math.sin(b)).toFixed(1) + ' Z" fill="#f4b73c" opacity=".5"/>';
  }
  return wrap(
    '<rect width="480" height="440" fill="#f7d58a"/>' + rays +
    '<circle cx="240" cy="170" r="84" fill="#dd9b16" stroke="' + INK + '" stroke-width="4"/>' +
    '<text class="sb-svg-text" x="240" y="188" font-size="38" text-anchor="middle" fill="#7d1c0e" font-weight="800">Kannada</text>' +
    '<path d="M0 290 Q110 220 220 280 T480 262 L480 440 L0 440 Z" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 340 Q160 290 300 335 T480 320 L480 440 L0 440 Z" fill="#44703a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M205 440 Q232 380 236 330 L246 330 Q250 380 290 440 Z" fill="#e8cf98" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M70 120 q10 -12 20 0 q10 -12 20 0 M380 90 q10 -12 20 0 q10 -12 20 0" fill="none" stroke="' + INK + '" stroke-width="3"/>' +
    fig(205, 425, .62, { who: "anand", l: [-30, -48], r: [38, -78] }) +
    fig(280, 428, .62, { who: "rahul", l: [-30, -50], r: [30, -52] })
  );
};

/* ---------------- OVERVIEW: the road ---------------- */
SCENES.overview = function () {
  var pts = [[110, 395], [280, 340], [130, 285], [280, 230], [140, 175], [260, 120]], dots = "", i;
  for (i = 0; i < pts.length; i++) {
    dots += '<circle cx="' + pts[i][0] + '" cy="' + pts[i][1] + '" r="17" fill="#b5301d" stroke="' + INK + '" stroke-width="3"/>' +
      '<text class="sb-svg-text" x="' + pts[i][0] + '" y="' + (pts[i][1] + 6) + '" font-size="18" text-anchor="middle" fill="#fff7e2" font-weight="800">' + (i + 1) + '</text>';
  }
  var road = "M110 395 C200 395 290 380 280 340 C270 300 140 330 130 285 C120 245 270 275 280 230 C290 190 150 220 140 175 C130 135 260 165 260 120";
  return wrap(
    '<rect width="480" height="440" fill="#cfe5cf"/>' +
    '<circle cx="410" cy="50" r="30" fill="#f4b73c" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 90 Q80 30 160 90 T320 80 T480 100 L480 440 L0 440 Z" fill="#9cc58a" stroke="' + INK + '" stroke-width="3"/>' +
    '<g transform="translate(60 0)">' +
    '<path d="' + road + '" fill="none" stroke="' + INK + '" stroke-width="30" stroke-linecap="round"/>' +
    '<path d="' + road + '" fill="none" stroke="#e8cf98" stroke-width="24" stroke-linecap="round"/>' +
    '<path d="' + road + '" fill="none" stroke="#b5301d" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round"/>' +
    dots +
    '<path d="M260 120 L260 66" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M260 66 L308 80 L260 94 Z" fill="#dd9b16" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
    '</g>' +
    '<g transform="translate(30 330)"><rect x="-6" y="0" width="12" height="40" fill="#7a4a22" stroke="' + INK + '" stroke-width="3"/><circle cx="0" cy="-8" r="26" fill="#44703a" stroke="' + INK + '" stroke-width="3"/></g>' +
    fig(75, 432, .5, { who: "anand", r: [34, -70] }) +
    fig(115, 434, .5, { who: "rahul" })
  );
};

/* ---------------- PROGRAM 1: veranda, slate, four scroll tags ---------------- */
function verandaScene(tags, chalk, bub, bubSize) {
  var planks = "", i;
  for (i = 0; i < 5; i++) planks += '<path d="M0 ' + (345 + i * 22) + ' H480" stroke="#a87a42" stroke-width="2"/>';
  return wrap(
    '<rect width="480" height="440" fill="#f3dca6"/>' +
    '<path d="M150 14 L270 14 L440 336 L250 336 Z" fill="#fff3c0" opacity=".4"/>' +
    '<path d="M140 336 L140 196 Q240 100 340 196 L340 336 Z" fill="#bfe0b0" stroke="' + INK + '" stroke-width="4"/>' +
    '<circle cx="240" cy="200" r="22" fill="#f4b73c" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M140 300 Q200 256 240 288 T340 276 L340 336 L140 336 Z" fill="#44703a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="0" y="0" width="480" height="14" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    '<rect x="0" y="14" width="30" height="322" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="450" y="14" width="30" height="322" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="0" y="336" width="480" height="104" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' + planks +
    '<rect x="40" y="352" width="400" height="80" rx="8" fill="#d7b26a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="50" y="360" width="380" height="64" rx="5" fill="none" stroke="#b5301d" stroke-width="2.5" stroke-dasharray="6 5"/>' +
    scrollTag(20, 24, 212, 34, tags[0][0], tags[0][1], "#fff3cf") +
    scrollTag(248, 24, 212, 34, tags[1][0], tags[1][1], "#fde9c0") +
    scrollTag(20, 66, 212, 34, tags[2][0], tags[2][1], "#fde9c0") +
    scrollTag(248, 66, 212, 34, tags[3][0], tags[3][1], "#fff3cf") +
    scrollTag(134, 108, 212, 32, tags[4][0], tags[4][1], "#fff3cf") +
    /* low table and slate */
    '<rect x="170" y="372" width="140" height="14" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<rect x="182" y="386" width="10" height="22" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/><rect x="288" y="386" width="10" height="22" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    fig(95, 412, 1.15, { who: "anand", l: [-30, -26], r: [92, -66] }) +
    fig(388, 412, 1.15, { who: "rahul", l: [-4, -58], r: [30, -26] }) +
    '<g transform="rotate(-6 240 330)"><rect x="192" y="272" width="96" height="98" rx="6" fill="#2b2b2b" stroke="#7a4a22" stroke-width="7"/>' +
    chalk + '</g>' +
    bubble(318, 196, 142, 38, bub, bubSize, "r")
  );
}

/* Program 1: speaking about yourself (no script yet) */
SCENES.program1 = function () {
  return verandaScene([
    ["“I go to the office”", 13.5], ["“I come from home”", 14], ["“I give this to him”", 14],
    ["“That book is mine”", 14], ["“I will go with him”", 14]
  ], '<text class="sb-svg-text" x="240" y="306" font-size="22" text-anchor="middle" fill="#fff7e2" font-weight="800">I</text>' +
    '<text class="sb-svg-text" x="240" y="333" font-size="22" text-anchor="middle" fill="#fff7e2" font-weight="800">my</text>' +
    '<text class="sb-svg-text" x="240" y="360" font-size="22" text-anchor="middle" fill="#fff7e2" font-weight="800">mine</text>', "Naanu", 20);
};

/* Program 5: meeting the letters */
SCENES.script = function () {
  return verandaScene([
    ["The Letters", 15], ["Read what you speak", 13.5], ["Write what you speak", 13.5],
    ["Signs &amp; labels", 14], ["Short sentences", 14]
  ], '<text class="sb-svg-text" x="240" y="346" font-size="74" text-anchor="middle" fill="#fff7e2" font-weight="800">ಅ</text>', "Amma!", 20);
};

/* ---------------- PROGRAM 2: market and the Matrix Map ---------------- */
SCENES.program2 = function () {
  var chips = [
    ["They", 10, 16], ["She", 172, 16], ["He", 334, 16],
    ["It", 10, 58], ["We", 172, 58], ["You", 334, 58]
  ], lines = "", chipSvg = "", i;
  for (i = 0; i < chips.length; i++) {
    var cx = chips[i][1] + 68, cy = chips[i][2] + 30;
    lines += '<path d="M262 292 L' + cx + ' ' + cy + '" stroke="#f4b73c" stroke-width="7" opacity=".28" stroke-linecap="round"/>' +
      '<path d="M262 292 L' + cx + ' ' + cy + '" stroke="#b5301d" stroke-width="2.4" stroke-dasharray="6 5" stroke-linecap="round"/>';
    chipSvg += '<rect x="' + chips[i][1] + '" y="' + chips[i][2] + '" width="136" height="30" rx="15" fill="#fff3cf" stroke="#dd9b16" stroke-width="3"/>' +
      '<text class="sb-svg-text" x="' + cx + '" y="' + (chips[i][2] + 20) + '" font-size="15" text-anchor="middle" fill="#7d1c0e" font-weight="800">' + chips[i][0] + '</text>';
  }
  return wrap(
    '<rect width="480" height="440" fill="#bfe4f0"/>' +
    '<path d="M0 205 Q120 150 240 200 T480 190 L480 340 L0 340 Z" fill="#9cc58a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="0" y="318" width="480" height="122" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/>' +
    stall(168, 196, 130, "#b5301d", ["#dd9b16", "#b5301d", "#44703a"]) +
    stall(326, 196, 140, "#27386b", ["#44703a", "#dd9b16", "#b5301d"]) +
    fig(233, 338, .62, { who: "local", f: true, top: "#8a2f6b", hair: "#2a1a10", r: [26, -60] }) +
    fig(396, 338, .62, { who: "local", top: "#44703a", l: [-28, -70] }) +
    fig(40, 338, .62, { who: "local", top: "#b5301d", l: [-30, -112], r: [30, -112] }) +
    fig(82, 340, .62, { who: "local", top: "#dd9b16", f: true, l: [-30, -108], r: [30, -112] }) +
    fig(122, 338, .62, { who: "local", top: "#4f8fb8", l: [-30, -110], r: [30, -108] }) +
    fig(130, 436, 1.02, { who: "anand", r: [74, -118], l: [-30, -52] }) +
    fig(262, 436, 1.02, { who: "rahul", l: [-34, -58], r: [34, -92] }) +
    lines + chipSvg +
    '<text class="sb-svg-text" x="240" y="118" font-size="14" text-anchor="middle" fill="#7d1c0e" font-style="italic" font-weight="700">✦ Matrix Map ✦</text>'
  );
};

/* ---------------- PROGRAM 3: library veranda ---------------- */
SCENES.program3 = function () {
  var books = "", cols = ["#b5301d", "#27386b", "#44703a", "#dd9b16", "#7a4a22", "#8a2f6b"], r, c, x, h;
  for (r = 0; r < 4; r++) {
    x = 8;
    for (c = 0; c < 11; c++) {
      h = 40 + ((r * 7 + c * 13) % 5) * 5;
      books += '<rect x="' + x + '" y="' + (62 + r * 66 - h + 40) + '" width="20" height="' + h + '" fill="' + cols[(r + c * 2) % cols.length] + '" stroke="' + INK + '" stroke-width="1.8"/>';
      x += 25;
    }
    books += '<rect x="0" y="' + (102 + r * 66) + '" width="290" height="8" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>';
  }
  var mat = "", i;
  for (i = 0; i < 12; i++) mat += '<path d="M' + (50 + i * 30) + ' 354 V424" stroke="#b8923f" stroke-width="1.6"/>';
  return wrap(
    '<rect width="480" height="440" fill="#ead6a4"/>' +
    '<rect x="320" y="44" width="140" height="200" rx="4" fill="#bfe0b0" stroke="' + INK + '" stroke-width="5"/>' +
    '<path d="M320 200 Q370 160 400 190 T460 176 L460 244 L320 244 Z" fill="#44703a"/>' +
    '<path d="M390 44 V244 M320 144 H460" stroke="' + INK + '" stroke-width="4"/>' +
    books +
    '<rect x="0" y="330" width="480" height="110" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M330 244 L460 244 L420 330 L250 330 Z" fill="#fff3c0" opacity=".35"/>' +
    '<path d="M60 336 H460 M30 378 H430" stroke="#fff3c0" stroke-width="3" opacity=".35"/>' +
    '<rect x="44" y="352" width="392" height="76" rx="6" fill="#d9b866" stroke="' + INK + '" stroke-width="3"/>' + mat +
    /* brass lamp */
    '<rect x="438" y="262" width="8" height="70" fill="#a87a28" stroke="' + INK + '" stroke-width="2"/>' +
    '<ellipse cx="442" cy="334" rx="16" ry="5" fill="#a87a28" stroke="' + INK + '" stroke-width="2"/>' +
    '<circle cx="442" cy="226" r="40" fill="#f4b73c" opacity=".3"/>' +
    '<path d="M424 262 Q442 282 462 262 L458 254 L428 254 Z" fill="#d9a53a" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M442 252 Q432 238 442 222 Q452 238 442 252 Z" fill="#f4b73c" stroke="#b5301d" stroke-width="2"/>' +
    fig(150, 412, 1.15, { who: "anand", pose: "sit", l: [-32, -28], r: [58, -62] }) +
    fig(335, 412, 1.15, { who: "rahul", pose: "sit", l: [-30, -26], r: [34, -112] }) +
    /* slate with the map between spoken and written */
    '<rect x="188" y="292" width="124" height="86" rx="6" fill="#2b2b2b" stroke="#7a4a22" stroke-width="7"/>' +
    '<rect x="198" y="318" width="44" height="30" rx="4" fill="none" stroke="#fff7e2" stroke-width="2"/>' +
    '<rect x="258" y="318" width="44" height="30" rx="4" fill="none" stroke="#fff7e2" stroke-width="2"/>' +
    '<text class="sb-svg-text" x="220" y="339" font-size="11.5" text-anchor="middle" fill="#fff7e2" font-weight="700">Speech</text>' +
    '<text class="sb-svg-text" x="280" y="339" font-size="11.5" text-anchor="middle" fill="#fff7e2" font-weight="700">Writing</text>' +
    '<path d="M244 327 H256 M251 323 L256 327 L251 331 M256 339 H244 M249 335 L244 339 L249 343" stroke="#f4b73c" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    '<text class="sb-svg-text" x="250" y="311" font-size="12" text-anchor="middle" fill="#f4b73c" font-weight="700">spoken ⇄ written</text>' +
    bubble(354, 130, 92, 38, "Aha!", 22, "r")
  );
};

/* ---------------- PROGRAM 4: pavilion, two hourglasses ---------------- */
SCENES.program4 = function () {
  var arches = "", leaves = "", i, lx = [[70, 200, 20], [120, 262, -30], [230, 190, 40], [270, 240, -10], [380, 210, 25], [420, 270, -40], [60, 300, 10], [340, 300, 30]];
  for (i = 0; i < 3; i++) {
    var x0 = 24 + i * 153;
    arches += 'M' + x0 + ' 340 V176 Q' + (x0 + 63) + ' 96 ' + (x0 + 126) + ' 176 V340 Z ';
  }
  for (i = 0; i < lx.length; i++) {
    leaves += '<g transform="translate(' + lx[i][0] + ' ' + lx[i][1] + ') rotate(' + lx[i][2] + ')"><path d="M0 0 Q8 -9 18 0 Q8 9 0 0 Z" fill="' + (i % 2 ? "#dd9b16" : "#6f9a5a") + '" stroke="' + INK + '" stroke-width="1.6"/>' +
      '<path d="M-22 4 Q-12 -6 0 0" fill="none" stroke="#7a4a22" stroke-width="1.6" stroke-dasharray="3 3"/></g>';
  }
  return wrap(
    '<defs><linearGradient id="sbSky4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd0e6"/><stop offset="1" stop-color="#f7e2b0"/></linearGradient></defs>' +
    '<rect width="480" height="440" fill="url(#sbSky4)"/>' +
    '<path d="M0 250 L70 190 L130 240 L200 170 L280 245 L350 180 L420 235 L480 200 L480 340 L0 340 Z" fill="#8fb0c8" stroke="' + INK + '" stroke-width="2.5"/>' +
    '<path d="M0 290 Q120 250 240 285 T480 275 L480 340 L0 340 Z" fill="#6f9a5a" stroke="' + INK + '" stroke-width="2.5"/>' +
    leaves +
    '<path fill-rule="evenodd" d="M0 0 H480 V340 H0 Z ' + arches + '" fill="#cdbfa3" stroke="' + INK + '" stroke-width="4"/>' +
    '<rect x="0" y="0" width="480" height="30" fill="#b9ab8f" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M0 340 H480 V440 H0 Z" fill="#d6c7a6" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M0 372 H480 M0 406 H480 M120 340 V372 M300 372 V406 M200 406 V440" stroke="#b9ab8f" stroke-width="3"/>' +
    '<g transform="translate(0 0)">' + leaves.replace(/translate\((\d+) (\d+)\)/g, function (m, a, b) { return "translate(" + (parseInt(a, 10) + 40) + " " + (parseInt(b, 10) + 80) + ")"; }) + '</g>' +
    fig(170, 428, 1.15, { who: "anand", l: [-40, -104], r: [40, -104] }) +
    hourglass(124, 282, "run") + hourglass(216, 282, "done") +
    pill(124, 220, 94, "Ongoing", 14, "#fff7e2", "#b5301d") +
    pill(216, 220, 106, "Completed", 14, "#fff7e2", "#44703a") +
    fig(352, 428, 1.15, { who: "rahul", l: [-62, -122], r: [60, -112] }) +
    bubble(290, 150, 160, 38, "I have been there!", 14, "r")
  );
};

/* ---------------- PROGRAM 5: banyan tree, evening ---------------- */
SCENES.program5 = function () {
  var lights = "", i, t, px, py, roots = "";
  for (i = 0; i < 22; i++) {
    t = i / 21;
    px = 40 + t * 400;
    py = 150 + Math.sin(t * Math.PI * 3) * 14 + Math.sin(t * Math.PI) * 50;
    lights += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="8" fill="#ffe27a" opacity=".3"/><circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="3.4" fill="#ffe27a" stroke="' + INK + '" stroke-width="1"/>';
  }
  for (i = 0; i < 7; i++) roots += '<path d="M' + (70 + i * 56) + ' 160 Q' + (74 + i * 56) + ' 230 ' + (70 + i * 56) + ' ' + (290 + (i % 2) * 14) + '" fill="none" stroke="#6b4423" stroke-width="4"/>';
  return wrap(
    '<defs><linearGradient id="sbDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b2f6b"/><stop offset=".6" stop-color="#d9764a"/><stop offset="1" stop-color="#f4b73c"/></linearGradient></defs>' +
    '<rect width="480" height="440" fill="url(#sbDusk)"/>' +
    '<circle cx="60" cy="60" r="2" fill="#fff"/><circle cx="420" cy="40" r="2" fill="#fff"/><circle cx="300" cy="24" r="2" fill="#fff"/>' +
    roots +
    '<path d="M200 330 Q208 250 188 170 L292 170 Q272 250 280 330 Z" fill="#6b4423" stroke="' + INK + '" stroke-width="4"/>' +
    '<g fill="#2f5d3a" stroke="' + INK + '" stroke-width="4"><circle cx="100" cy="116" r="62"/><circle cx="200" cy="72" r="72"/><circle cx="310" cy="76" r="70"/><circle cx="392" cy="122" r="58"/><circle cx="240" cy="136" r="62"/></g>' +
    '<g fill="#44703a"><circle cx="150" cy="80" r="16"/><circle cx="260" cy="50" r="18"/><circle cx="350" cy="100" r="15"/><circle cx="80" cy="130" r="14"/></g>' +
    lights +
    '<rect x="0" y="330" width="480" height="110" fill="#6b8a3f" stroke="' + INK + '" stroke-width="3"/>' +
    /* tea stall */
    '<rect x="14" y="250" width="8" height="84" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/><rect x="112" y="250" width="8" height="84" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    '<path d="M4 252 L68 226 L130 252 Z" fill="#b5301d" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<rect x="22" y="304" width="90" height="30" rx="3" fill="#8a5a2c" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M52 304 Q44 276 58 270 H86 Q100 276 92 304 Z" fill="#b5642f" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<path d="M62 262 Q56 250 66 242 Q76 232 68 222 M80 262 Q74 250 84 242 Q94 232 86 222" fill="none" stroke="#fff7e2" stroke-width="3" stroke-linecap="round" opacity=".85"/>' +
    /* bench and Rahul */
    '<rect x="186" y="344" width="108" height="14" rx="3" fill="#a9a191" stroke="' + INK + '" stroke-width="2.6"/><rect x="194" y="358" width="14" height="26" fill="#a9a191" stroke="' + INK + '" stroke-width="2.4"/><rect x="272" y="358" width="14" height="26" fill="#a9a191" stroke="' + INK + '" stroke-width="2.4"/>' +
    fig(240, 344, 1.0, { who: "rahul", pose: "bench", l: [-40, -62], r: [42, -80] }) +
    /* circle of locals */
    fig(120, 420, .86, { who: "local", pose: "sit", top: "#b5301d", f: true, r: [40, -80] }) +
    fig(176, 428, .8, { who: "local", pose: "sit", top: "#dd9b16" }) +
    fig(318, 428, .8, { who: "local", pose: "sit", top: "#8a2f6b", f: true, l: [-30, -80] }) +
    fig(372, 420, .86, { who: "local", pose: "sit", top: "#4f8fb8" }) +
    /* Anand a few steps back, arms crossed */
    fig(438, 372, .78, { who: "anand", l: [22, -86], r: [-22, -84] }) +
    bubble(295, 200, 130, 36, "Really? Then?", 15, "l")
  );
};

/* ---------------- PROGRAM 6: the stage ---------------- */
SCENES.program6 = function () {
  var seats = "", i;
  for (i = 0; i < 5; i++) seats += '<rect x="' + (14 + i * 96) + '" y="402" width="76" height="38" rx="8" fill="#5a1f2a" stroke="#2b0e14" stroke-width="3"/>';
  return wrap(
    '<rect width="480" height="440" fill="#2b1c4a"/>' +
    '<rect x="60" y="30" width="360" height="290" fill="#3b2b66" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M410 22 L120 326 L350 326 Z" fill="#fff0b0" opacity=".32"/>' +
    '<rect x="0" y="0" width="480" height="30" fill="#7d1c0e" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 30 L90 30 Q60 160 80 326 L0 326 Z" fill="#b5301d" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M480 30 L390 30 Q420 160 400 326 L480 326 Z" fill="#b5301d" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M24 50 Q38 190 32 326 M50 44 Q64 190 58 326 M456 50 Q442 190 448 326 M430 44 Q416 190 422 326" fill="none" stroke="#7d1c0e" stroke-width="3"/>' +
    '<rect x="0" y="326" width="480" height="84" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 352 H480 M0 378 H480" stroke="#8a5a2c" stroke-width="2.5"/>' +
    /* projector */
    '<rect x="396" y="6" width="58" height="28" rx="5" fill="#3a3a3a" stroke="#fff7e2" stroke-width="2.4"/><circle cx="400" cy="20" r="9" fill="#fff0b0" stroke="#fff7e2" stroke-width="2.4"/>' +
    /* cheering alumni */
    fig(96, 346, .78, { who: "local", top: "#dd9b16", l: [-30, -118], r: [30, -122] }) +
    fig(150, 348, .78, { who: "local", top: "#44703a", f: true, l: [-30, -120], r: [30, -116] }) +
    fig(338, 348, .78, { who: "local", top: "#4f8fb8", l: [-30, -118], r: [30, -122] }) +
    /* side table: newspapers, reels, books */
    '<rect x="396" y="330" width="76" height="8" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.2"/><rect x="402" y="338" width="6" height="40" fill="#7a4a22"/><rect x="460" y="338" width="6" height="40" fill="#7a4a22"/>' +
    '<g transform="translate(402 296) rotate(-4)"><rect width="38" height="34" fill="#fff7e2" stroke="' + INK + '" stroke-width="2"/><path d="M5 8 H33 M5 15 H33 M5 22 H22" stroke="' + INK + '" stroke-width="2"/></g>' +
    '<g transform="translate(446 316)"><circle r="12" fill="#2b2b2b" stroke="#fff7e2" stroke-width="2"/><circle cx="-5" cy="-3" r="2.4" fill="#fff7e2"/><circle cx="5" cy="-3" r="2.4" fill="#fff7e2"/><circle cx="0" cy="5" r="2.4" fill="#fff7e2"/></g>' +
    '<rect x="428" y="318" width="26" height="6" fill="#b5301d" stroke="' + INK + '" stroke-width="1.6"/><rect x="430" y="324" width="24" height="6" fill="#27386b" stroke="' + INK + '" stroke-width="1.6"/>' +
    /* Rahul centre stage with a script scroll */
    fig(240, 352, 1.15, { who: "rahul", l: [-48, -126], r: [44, -86] }) +
    '<g transform="translate(300 262) rotate(18)"><rect x="-6" y="-26" width="12" height="52" rx="6" fill="#fff3cf" stroke="' + INK + '" stroke-width="2.4"/><path d="M-3 -12 H3 M-3 -4 H3 M-3 4 H3" stroke="#b5301d" stroke-width="1.6"/></g>' +
    /* audience */
    '<circle cx="330" cy="408" r="16" fill="#1a0f2e"/><circle cx="388" cy="412" r="16" fill="#1a0f2e"/><circle cx="440" cy="408" r="16" fill="#1a0f2e"/>' +
    fig(150, 444, .92, { who: "anand", pose: "sit", l: [-6, -52], r: [8, -52] }) +
    seats
  );
};

/* ---------------- FINALE: the gate ---------------- */
SCENES.finale = function () {
  return wrap(
    '<rect width="480" height="440" fill="#27386b"/>' +
    '<g fill="#fde28a"><circle cx="60" cy="50" r="3"/><circle cx="150" cy="30" r="2"/><circle cx="400" cy="40" r="3"/><circle cx="320" cy="86" r="2"/><circle cx="440" cy="120" r="2"/><circle cx="40" cy="130" r="2"/></g>' +
    '<circle cx="400" cy="86" r="26" fill="#fff0cc" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 306 Q140 266 260 300 T480 286 L480 440 L0 440 Z" fill="#2f5d3a" stroke="' + INK + '" stroke-width="3"/>' +
    '<g transform="translate(40 0)">' +
    '<path d="M150 440 Q190 366 205 306 L235 306 Q235 376 300 440 Z" fill="#e8cf98" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="95" y="170" width="26" height="150" fill="#b5301d" stroke="' + INK + '" stroke-width="4"/>' +
    '<rect x="279" y="170" width="26" height="150" fill="#b5301d" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M70 170 L330 170 L310 140 L90 140 Z" fill="#dd9b16" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    '<rect x="115" y="170" width="170" height="40" fill="#fff7e2" stroke="' + INK + '" stroke-width="4"/>' +
    '<text class="sb-svg-text" x="200" y="199" font-size="26" text-anchor="middle" fill="#b5301d" font-weight="800">Welcome</text>' +
    '<path d="M200 210 L200 232" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="200" cy="260" r="40" fill="#f4b73c" opacity=".35"/>' +
    '<path d="M186 236 L214 236 L220 268 Q200 283 180 268 Z" fill="#fde28a" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M200 242 Q192 256 200 264 Q208 256 200 242 Z" fill="#b5301d"/>' +
    '</g>' +
    '<g transform="translate(34 336)"><path d="M0 0 Q5 -50 0 -90" stroke="#7a4a22" stroke-width="7" fill="none"/><path d="M0 -90 q-34 -6 -44 18 M0 -90 q34 -6 44 18 M0 -90 q-10 -30 -36 -28 M0 -90 q10 -30 36 -28" stroke="#44703a" stroke-width="6" fill="none" stroke-linecap="round"/></g>' +
    fig(165, 432, .8, { who: "anand", l: [-30, -52], r: [40, -120] }) +
    fig(318, 434, .8, { who: "rahul", l: [-40, -118], r: [30, -52] })
  );
};

/* =====================================================================
   SCENES FOR THE OTHER PAGES
   ===================================================================== */
var STETH = '<path d="M-9 -108 Q-14 -76 0 -70 Q14 -76 9 -108" fill="none" stroke="#2b2b2b" stroke-width="3"/><circle cx="0" cy="-68" r="4.5" fill="#9a9a9a" stroke="' + INK + '" stroke-width="1.5"/>';
var LANYARD = '<path d="M-8 -108 L0 -80 L8 -108" fill="none" stroke="#b5301d" stroke-width="2.5"/><rect x="-6" y="-82" width="12" height="15" rx="2" fill="#fff" stroke="' + INK + '" stroke-width="1.6"/>';

function skyBg(id, c1, c2) {
  return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs>' +
    '<rect width="480" height="440" fill="url(#' + id + ')"/>';
}
function houseSvg(x, y, w, h, roof) {
  return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f0d9a8" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M' + (x - 8) + ' ' + y + ' L' + (x + w / 2) + ' ' + (y - h * 0.5) + ' L' + (x + w + 8) + ' ' + y + ' Z" fill="' + roof + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<rect x="' + (x + w / 2 - 9) + '" y="' + (y + h - 34) + '" width="18" height="34" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="' + (x + 8) + '" y="' + (y + 12) + '" width="16" height="16" fill="#bfe0b0" stroke="' + INK + '" stroke-width="2"/>';
}
function treeSvg(x, y, s) {
  return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="-7" y="-64" width="14" height="64" fill="#7a4a22" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="-24" cy="-70" r="24" fill="#44703a" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="24" cy="-70" r="24" fill="#44703a" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="0" cy="-92" r="30" fill="#5a8a48" stroke="' + INK + '" stroke-width="3"/></g>';
}
function cameo(x) { return fig(x, 432, .55, { who: "anand" }); }

/* A signpost with arrow boards. labels: array of short texts */
function signpost(labels, size) {
  var n = labels.length, h = Math.min(46, 240 / n), bh = h - 8, out = "", i, y, fill;
  for (i = 0; i < n; i++) {
    y = 30 + i * h;
    fill = i % 2 ? "#fde9c0" : "#fff3cf";
    if (i % 2 === 0) {
      out += '<path d="M240 ' + y + ' L428 ' + y + ' L452 ' + (y + bh / 2) + ' L428 ' + (y + bh) + ' L240 ' + (y + bh) + ' Z" fill="' + fill + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
        '<text class="sb-svg-text" x="336" y="' + (y + bh / 2 + 5) + '" font-size="' + size + '" text-anchor="middle" fill="#7d1c0e" font-weight="800">' + labels[i] + '</text>';
    } else {
      out += '<path d="M240 ' + y + ' L52 ' + y + ' L28 ' + (y + bh / 2) + ' L52 ' + (y + bh) + ' L240 ' + (y + bh) + ' Z" fill="' + fill + '" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
        '<text class="sb-svg-text" x="144" y="' + (y + bh / 2 + 5) + '" font-size="' + size + '" text-anchor="middle" fill="#7d1c0e" font-weight="800">' + labels[i] + '</text>';
    }
  }
  return wrap(
    skyBg("sbSign" + n, "#bfe4f0", "#fbeccc") +
    '<path d="M0 330 Q120 290 240 322 T480 310 L480 440 L0 440 Z" fill="#9cc58a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 370 Q240 345 480 372 L480 440 L0 440 Z" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="230" y="24" width="20" height="360" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="240" cy="22" r="9" fill="#dd9b16" stroke="' + INK + '" stroke-width="3"/>' +
    out +
    fig(90, 432, .9, { who: "rahul", r: [40, -118] }) +
    fig(390, 432, .9, { who: "anand", r: [44, -122] })
  );
}

/* ---------------- HOME ---------------- */
SCENES.home1 = function () {
  var garland = "", i, t;
  for (i = 0; i <= 14; i++) {
    t = i / 14;
    garland += '<circle cx="' + (40 + 400 * t).toFixed(1) + '" cy="' + (130 + 200 * t * (1 - t)).toFixed(1) + '" r="7" fill="' + (i % 2 ? "#dd9b16" : "#e8761a") + '" stroke="' + INK + '" stroke-width="1.6"/>';
  }
  return wrap(
    skyBg("sbHome1", "#f6c98a", "#fbe9b8") +
    '<circle cx="240" cy="230" r="66" fill="#f4b73c" opacity=".75"/>' +
    '<path d="M0 280 Q120 232 240 270 T480 258 L480 440 L0 440 Z" fill="#8fb36f" stroke="' + INK + '" stroke-width="3"/>' +
    houseSvg(18, 236, 92, 70, "#b5301d") + houseSvg(372, 232, 96, 74, "#27386b") + treeSvg(330, 306, .9) +
    '<path d="M0 372 Q240 338 480 380 L480 440 L0 440 Z" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="34" y="104" width="9" height="200" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="437" y="104" width="9" height="200" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' +
    garland +
    '<rect x="182" y="164" width="116" height="34" rx="6" fill="#b5301d" stroke="' + INK + '" stroke-width="3"/>' +
    '<text class="sb-svg-text" x="240" y="188" font-size="22" text-anchor="middle" fill="#fff7e2" font-weight="800">Welcome</text>' +
    '<rect x="96" y="402" width="34" height="26" rx="3" fill="#8a5a2c" stroke="' + INK + '" stroke-width="2.6"/><path d="M106 402 V396 H120 V402" fill="none" stroke="' + INK + '" stroke-width="2.4"/>' +
    fig(150, 428, 1.05, { who: "rahul", l: [-36, -20], r: [30, -52] }) +
    fig(330, 428, 1.05, { who: "anand", l: [-6, -72], r: [6, -72] }) +
    bubble(60, 205, 120, 40, "Namaskara!", 18, "r") +
    bubble(270, 205, 130, 40, "Namaskara!", 18, "l")
  );
};

function homeStones(labels) {
  return wrap(
    skyBg("sbHome2", "#bfe4f0", "#fbeccc") +
    '<path d="M0 250 L60 200 L120 245 L190 190 L260 248 L340 196 L410 244 L480 206 L480 300 L0 300 Z" fill="#8fb0c8" stroke="' + INK + '" stroke-width="2.5"/>' +
    '<rect x="0" y="290" width="480" height="150" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M104 296 Q240 276 376 296 L396 410 Q240 436 84 410 Z" fill="#4f8fb8" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M120 330 q12 -10 24 0 t24 0 M290 322 q12 -10 24 0 t24 0 M150 388 q12 -10 24 0 t24 0 M270 394 q12 -10 24 0 t24 0" fill="none" stroke="#fff7e2" stroke-width="3" stroke-linecap="round"/>' +
    treeSvg(40, 330, 1.1) +
    '<ellipse cx="165" cy="356" rx="36" ry="14" fill="#a9a191" stroke="' + INK + '" stroke-width="3"/>' +
    '<ellipse cx="240" cy="364" rx="36" ry="14" fill="#a9a191" stroke="' + INK + '" stroke-width="3"/>' +
    '<ellipse cx="315" cy="356" rx="36" ry="14" fill="#a9a191" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M100 70 L165 342 M240 70 L240 350 M380 70 L315 342" stroke="#dd9b16" stroke-width="2.6" stroke-dasharray="5 6" fill="none"/>' +
    pill(100, 44, 120, labels[0], 14, "#fff3cf", "#7d1c0e") +
    pill(240, 44, 130, labels[1], 14, "#fff3cf", "#7d1c0e") +
    pill(380, 44, 120, labels[2], 14, "#fff3cf", "#7d1c0e") +
    fig(240, 362, .8, { who: "rahul", l: [-50, -76], r: [50, -76] }) +
    fig(425, 420, .85, { who: "anand", r: [40, -124] })
  );
}
SCENES.home2 = function () { return homeStones(["Practical", "Step by step", "Connection"]); };
SCENES.home2b = function () { return homeStones(["The problem", "Why it happens", "The solution"]); };

SCENES.home3 = function () {
  return signpost(["1 · Speak first", "2 · Sentence patterns", "3 · More words", "4 · Read Kannada", "5 · Written Kannada", "6 · Advanced grammar", "7 · Alumni community"], 13);
};

/* ---------------- WHO IT'S FOR ---------------- */
SCENES.who0 = function () {
  return wrap(
    skyBg("sbWho0", "#cfe5f0", "#fbe9c0") +
    '<path d="M0 270 Q120 232 240 262 T480 250 L480 440 L0 440 Z" fill="#9cc58a" stroke="' + INK + '" stroke-width="3"/>' +
    treeSvg(240, 300, 1.7) +
    '<ellipse cx="240" cy="404" rx="226" ry="34" fill="#e8cf98" stroke="' + INK + '" stroke-width="3"/>' +
    fig(240, 408, .95, { who: "anand", l: [-52, -100], r: [52, -100] }) +
    fig(70, 420, .8, { f: true, top: "#ffffff", low: "#e8e8e8", extra: STETH }) +
    fig(150, 426, .8, { top: "#4f8fb8", extra: LANYARD }) +
    fig(335, 426, .8, { f: true, top: "#8a2f6b", hair: "#6b3b1c" }) +
    '<rect x="352" y="318" width="10" height="62" rx="5" fill="#44a6a0" stroke="' + INK + '" stroke-width="2" transform="rotate(18 357 349)"/>' +
    fig(412, 420, .8, { top: "#44703a" }) + fig(448, 428, .48, { top: "#dd9b16" }) +
    pill(70, 248, 80, "Care", 14) + pill(150, 248, 80, "Work", 14) + pill(335, 248, 80, "Yoga", 14) + pill(430, 248, 96, "Family", 14)
  );
};

SCENES.whoHealth = function () {
  return wrap(
    '<rect width="480" height="440" fill="#dff0e4"/>' +
    '<rect x="0" y="350" width="480" height="90" fill="#c9d6c4" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="300" y="40" width="130" height="100" rx="4" fill="#bfe0f0" stroke="' + INK + '" stroke-width="4"/><path d="M365 40 V140 M300 90 H430" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="30" y="40" width="64" height="64" rx="8" fill="#fff" stroke="' + INK + '" stroke-width="3"/><path d="M62 52 V92 M42 72 H82" stroke="#b5301d" stroke-width="12"/>' +
    /* bed */
    '<rect x="236" y="330" width="232" height="14" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/><rect x="244" y="344" width="10" height="26" fill="#7a4a22"/><rect x="450" y="344" width="10" height="26" fill="#7a4a22"/>' +
    '<rect x="240" y="306" width="224" height="26" rx="6" fill="#ffffff" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<ellipse cx="290" cy="296" rx="34" ry="14" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.6"/>' +
    fig(306, 322, .8, { who: "local", pose: "sit", top: "#c9d6e8", hair: "#eeeeee" }) +
    '<path d="M320 300 H466 V328 H320 Z" fill="#4f8fb8" stroke="' + INK + '" stroke-width="2.6"/><path d="M340 300 V328 M370 300 V328 M400 300 V328 M430 300 V328" stroke="#bcd9ec" stroke-width="3"/>' +
    fig(190, 424, 1.0, { f: true, top: "#ffffff", low: "#e8e8e8", extra: STETH }) +
    fig(46, 430, .6, { who: "anand" }) +
    bubble(70, 196, 150, 40, "How are you?", 18, "r") +
    bubble(290, 140, 150, 40, "I’m better now", 16, "l")
  );
};

SCENES.whoIT = function () {
  var skyline = "", i, hs = [60, 90, 70, 110, 80, 100];
  for (i = 0; i < 6; i++) skyline += '<rect x="' + (28 + i * 32) + '" y="' + (150 - hs[i]) + '" width="26" height="' + hs[i] + '" fill="#6a7fa8" stroke="' + INK + '" stroke-width="2"/>';
  return wrap(
    '<rect width="480" height="440" fill="#e6e0f0"/>' +
    '<rect x="20" y="40" width="200" height="112" fill="#bfe4f0" stroke="' + INK + '" stroke-width="5"/>' + skyline +
    '<circle cx="400" cy="76" r="30" fill="#fff7e2" stroke="' + INK + '" stroke-width="4"/><path d="M400 76 V54 M400 76 H420" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/><circle cx="400" cy="76" r="3" fill="' + INK + '"/>' +
    '<rect x="0" y="372" width="480" height="68" fill="#b9b2c8" stroke="' + INK + '" stroke-width="3"/>' +
    fig(170, 376, .9, { who: "local", top: "#b5301d" }) +
    fig(300, 376, .9, { who: "rahul", top: "#27386b", extra: LANYARD }) +
    '<rect x="50" y="300" width="380" height="72" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/><rect x="50" y="296" width="380" height="12" fill="#a87a42" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="62" y="252" width="62" height="44" rx="3" fill="#27386b" stroke="' + INK + '" stroke-width="3"/><path d="M74 266 H110 M74 278 H100" stroke="#9fd0e6" stroke-width="3"/>' +
    '<path d="M360 296 L404 296 L396 270 L368 270 Z" fill="#4a4a4a" stroke="' + INK + '" stroke-width="3"/><rect x="368" y="272" width="28" height="18" fill="#9fd0e6"/>' +
    fig(452, 432, .55, { who: "anand" }) +
    bubble(60, 170, 170, 40, "When is the meeting?", 14, "r") +
    bubble(270, 170, 150, 40, "At three o’clock", 15, "l")
  );
};

SCENES.whoYoga = function () {
  return wrap(
    skyBg("sbYoga", "#f9d9a0", "#fdeccb") +
    '<path d="M150 336 L150 190 Q240 96 330 190 L330 336 Z" fill="#fbe08a" stroke="' + INK + '" stroke-width="4"/>' +
    '<circle cx="240" cy="226" r="34" fill="#f4b73c" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M150 300 Q200 262 240 290 T330 280 L330 336 L150 336 Z" fill="#6f9a5a"/>' +
    '<rect x="0" y="336" width="480" height="104" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/><path d="M0 366 H480 M0 396 H480" stroke="#a87a42" stroke-width="2.4"/>' +
    '<rect x="90" y="360" width="160" height="62" rx="6" fill="#d98aa6" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="296" y="360" width="160" height="62" rx="6" fill="#6fb5a8" stroke="' + INK + '" stroke-width="3"/>' +
    fig(172, 392, 1.05, { who: "rahul", pose: "sit", f: true, top: "#8a2f6b", hair: "#6b3b1c", l: [-40, -20], r: [40, -20] }) +
    fig(376, 392, 1.05, { who: "local", pose: "sit", f: true, top: "#dd9b16", l: [-6, -52], r: [6, -52] }) +
    fig(40, 430, .58, { who: "anand" }) +
    bubble(270, 188, 140, 40, "Breathe out", 18, "r") +
    bubble(100, 188, 90, 40, "Okay", 20, "r")
  );
};

SCENES.whoFamily = function () {
  return wrap(
    skyBg("sbFam", "#bfe4f0", "#fbeccc") +
    houseSvg(20, 190, 100, 80, "#b5301d") + houseSvg(140, 200, 90, 70, "#27386b") + houseSvg(340, 186, 110, 84, "#44703a") +
    '<rect x="0" y="300" width="480" height="140" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 340 Q240 322 480 346 L480 440 L0 440 Z" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/>' +
    '<g fill="#e8761a" stroke="' + INK + '" stroke-width="1.6"><circle cx="30" cy="318" r="6"/><circle cx="52" cy="324" r="6"/><circle cx="440" cy="320" r="6"/><circle cx="462" cy="326" r="6"/></g>' +
    fig(86, 424, .85, { who: "local", top: "#27386b" }) +
    fig(150, 428, .85, { who: "local", f: true, top: "#b5301d" }) +
    fig(204, 430, .5, { who: "local", top: "#dd9b16" }) +
    fig(322, 424, .85, { who: "local", f: true, top: "#8a2f6b", hair: "#eeeeee" }) +
    '<path d="M296 340 Q322 366 348 340 Z" fill="#c99a62" stroke="' + INK + '" stroke-width="2.4"/>' +
    fig(446, 432, .55, { who: "anand" }) +
    bubble(200, 206, 170, 40, "What a sweet child!", 14, "r") +
    bubble(50, 214, 120, 40, "Thank you!", 18, "r")
  );
};

/* ---------------- HOW IT WORKS ---------------- */
SCENES.how0 = function () {
  return signpost(["Stage 1 · Speak", "Stage 2 · Read &amp; Write", "Stage 3 · Belong"], 15);
};

SCENES.how1 = function () {
  var names = ["Clinics", "Cafés", "Yoga", "Markets", "Homes"], cols = ["#b5301d", "#27386b", "#6a4aa0", "#dd9b16", "#44703a"], i, out = "", bx, icon;
  for (i = 0; i < 5; i++) {
    bx = 14 + i * 93;
    icon = [
      '<path d="M' + (bx + 40) + ' 266 V300 M' + (bx + 23) + ' 283 H' + (bx + 57) + '" stroke="#b5301d" stroke-width="9"/>',
      '<path d="M' + (bx + 28) + ' 272 H' + (bx + 52) + ' V290 Q' + (bx + 40) + ' 300 ' + (bx + 28) + ' 290 Z" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4"/><path d="M' + (bx + 52) + ' 276 q10 2 0 12" fill="none" stroke="' + INK + '" stroke-width="2.4"/>',
      '<circle cx="' + (bx + 40) + '" cy="284" r="14" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4"/><path d="M' + (bx + 40) + ' 296 Q' + (bx + 30) + ' 282 ' + (bx + 40) + ' 272 Q' + (bx + 50) + ' 282 ' + (bx + 40) + ' 296 Z" fill="#d98aa6" stroke="' + INK + '" stroke-width="1.6"/>',
      '<path d="M' + (bx + 20) + ' 270 H' + (bx + 60) + ' L' + (bx + 54) + ' 284 H' + (bx + 26) + ' Z" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4"/><circle cx="' + (bx + 32) + '" cy="296" r="5" fill="#b5301d"/><circle cx="' + (bx + 48) + '" cy="296" r="5" fill="#44703a"/>',
      '<rect x="' + (bx + 31) + '" y="278" width="18" height="22" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.2"/>'
    ][i];
    out += '<rect x="' + bx + '" y="252" width="80" height="68" fill="#f0d9a8" stroke="' + INK + '" stroke-width="3"/>' +
      '<path d="M' + (bx - 6) + ' 252 L' + (bx + 40) + ' 218 L' + (bx + 86) + ' 252 Z" fill="' + cols[i] + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' + icon +
      '<text class="sb-svg-text" x="' + (bx + 40) + '" y="342" font-size="13.5" text-anchor="middle" fill="' + INK + '" font-weight="700">' + names[i] + '</text>';
  }
  return wrap(
    skyBg("sbHow1", "#bfe4f0", "#fbeccc") +
    '<circle cx="410" cy="62" r="30" fill="#f4b73c" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M0 232 Q120 190 240 224 T480 212 L480 360 L0 360 Z" fill="#9cc58a" stroke="' + INK + '" stroke-width="3"/>' + out +
    '<path d="M0 352 L480 352 L480 440 L0 440 Z" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/><path d="M0 396 H480" stroke="#fff7e2" stroke-width="3" stroke-dasharray="14 12"/>' +
    fig(170, 434, .85, { who: "rahul" }) +
    fig(300, 434, .85, { who: "anand", r: [42, -100] })
  );
};


/* ---------------- EVERYDAY KANNADA ---------------- */
SCENES.ev0 = function () {
  return signpost(["People &amp; places", "Daily needs", "Work &amp; study", "Health &amp; safety"], 14.5);
};

SCENES.evPeople = function () {
  return wrap(
    skyBg("sbEv1", "#bfe4f0", "#fbeccc") +
    houseSvg(10, 190, 96, 80, "#27386b") + houseSvg(118, 200, 86, 70, "#b5301d") + houseSvg(350, 192, 110, 78, "#44703a") +
    '<rect x="0" y="300" width="480" height="140" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/><path d="M0 340 H480" stroke="#b8923f" stroke-width="3"/>' +
    '<rect x="226" y="214" width="10" height="96" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M236 220 H300 L314 232 L300 244 H236 Z" fill="#fff3cf" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/><path d="M226 250 H170 L158 262 L170 274 H226 Z" fill="#fde9c0" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>' +
    fig(120, 428, 1.0, { who: "rahul", l: [-34, -64], r: [34, -52] }) +
    fig(340, 428, 1.0, { who: "local", f: true, top: "#8a2f6b", r: [64, -108] }) +
    cameo(448) +
    bubble(26, 204, 150, 40, "Where is this?", 17, "r") +
    bubble(246, 204, 140, 40, "Go straight", 17, "r")
  );
};

SCENES.evDaily = function () {
  return wrap(
    skyBg("sbEv2", "#fde9c0", "#f9d9a0") +
    '<rect x="0" y="330" width="480" height="110" fill="#d9b27a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="196" y="120" width="8" height="190" fill="#7a4a22"/><rect x="356" y="120" width="8" height="190" fill="#7a4a22"/>' +
    stall(190, 150, 180, "#b5301d", ["#dd9b16", "#b5301d", "#44703a"]).replace(/y="240"/g, 'y="240"') +
    fig(278, 348, .75, { who: "local", top: "#44703a" }) +
    '<rect x="196" y="262" width="168" height="78" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="22" y="110" width="150" height="70" rx="4" fill="#2b2b2b" stroke="#7a4a22" stroke-width="6"/>' +
    '<text class="sb-svg-text" x="97" y="156" font-size="30" text-anchor="middle" fill="#fff7e2" font-weight="800">1   2   3</text>' +
    fig(80, 432, 1.0, { who: "rahul", l: [-34, -52], r: [70, -76] }) +
    cameo(448) +
    bubble(10, 205, 150, 40, "How much is this?", 14, "l") +
    bubble(300, 90, 160, 40, "Twenty rupees", 16, "l")
  );
};

SCENES.evWork = function () {
  return wrap(
    '<rect width="480" height="440" fill="#efe3c4"/>' +
    '<rect x="40" y="36" width="270" height="130" rx="4" fill="#2f4a3a" stroke="#7a4a22" stroke-width="8"/>' +
    '<path d="M64 70 Q90 56 118 70 T170 70 M64 96 Q96 84 128 96 T190 96 M64 122 Q86 112 108 122" fill="none" stroke="#fff7e2" stroke-width="3" stroke-linecap="round"/>' +
    '<text class="sb-svg-text" x="262" y="124" font-size="64" text-anchor="middle" fill="#f4b73c" font-weight="800">?</text>' +
    '<rect x="0" y="372" width="480" height="68" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' +
    fig(170, 430, 1.0, { who: "rahul", l: [-30, -36], r: [30, -52] }) +
    '<rect x="196" y="388" width="34" height="24" rx="2" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4" transform="rotate(-10 213 400)"/>' +
    fig(350, 430, 1.0, { who: "local", f: true, top: "#b5301d", r: [-44, -128] }) +
    cameo(448) +
    bubble(20, 200, 190, 40, "Please say it again", 15, "r") +
    bubble(290, 200, 100, 40, "Certainly", 16, "r")
  );
};

SCENES.evHealth = function () {
  var bottles = "", i;
  for (i = 0; i < 9; i++) {
    bottles += '<rect x="' + (30 + i * 46) + '" y="' + (84 - (i % 3) * 4) + '" width="22" height="' + (36 + (i % 3) * 4) + '" rx="4" fill="' + ["#4f8fb8", "#dd9b16", "#44703a"][i % 3] + '" stroke="' + INK + '" stroke-width="2"/>' +
      '<rect x="' + (30 + i * 46) + '" y="' + (74 - (i % 3) * 4) + '" width="22" height="10" fill="#fff7e2" stroke="' + INK + '" stroke-width="2"/>';
  }
  return wrap(
    '<rect width="480" height="440" fill="#dff0e4"/>' +
    '<rect x="18" y="120" width="444" height="10" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' + bottles +
    '<rect x="190" y="150" width="100" height="40" rx="6" fill="#44703a" stroke="' + INK + '" stroke-width="3"/><path d="M240 156 V184 M226 170 H254" stroke="#fff" stroke-width="8"/>' +
    '<rect x="0" y="380" width="480" height="60" fill="#c9d6c4" stroke="' + INK + '" stroke-width="3"/>' +
    fig(350, 410, .92, { f: true, top: "#ffffff", low: "#e8e8e8", extra: STETH }) +
    '<rect x="250" y="320" width="230" height="120" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/><rect x="244" y="310" width="242" height="14" fill="#a87a42" stroke="' + INK + '" stroke-width="3"/>' +
    fig(130, 430, 1.0, { who: "rahul", l: [-6, -50], r: [8, -48] }) +
    cameo(40) +
    bubble(20, 200, 150, 40, "Stomach ache", 17, "r") +
    bubble(270, 206, 130, 40, "Don’t worry", 17, "r")
  );
};

/* ---------------- ABOUT ---------------- */
 SCENES.about0 = function () {
  return wrap(
    skyBg("sbAb0", "#f6c98a", "#fbe9b8") +
    '<rect x="40" y="130" width="400" height="220" fill="#f0d9a8" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M20 130 L240 50 L460 130 Z" fill="#b5301d" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    '<rect x="150" y="150" width="180" height="46" rx="6" fill="#fff7e2" stroke="' + INK + '" stroke-width="3.5"/>' +
    '<text class="sb-svg-text" x="240" y="182" font-size="19" text-anchor="middle" fill="#27386b" font-weight="800">Kannada Journey</text>' +
    '<rect x="190" y="220" width="100" height="130" rx="4" fill="#7a4a22" stroke="' + INK + '" stroke-width="3.5"/>' +
    '<rect x="70" y="150" width="14" height="200" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/><rect x="396" y="150" width="14" height="200" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="104" cy="226" r="26" fill="#f4b73c" opacity=".4"/><path d="M96 214 H112 L116 236 Q104 246 92 236 Z" fill="#fde28a" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="376" cy="226" r="26" fill="#f4b73c" opacity=".4"/><path d="M368 214 H384 L388 236 Q376 246 364 236 Z" fill="#fde28a" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="0" y="350" width="480" height="90" fill="#8fb36f" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M200 440 Q230 392 232 350 H248 Q250 392 290 440 Z" fill="#e8cf98" stroke="' + INK + '" stroke-width="3"/>' +
    fig(240, 352, 1.15, { who: "anand", l: [-6, -72], r: [6, -72] }) +
    fig(90, 434, .8, { who: "rahul", l: [-36, -20] })
  );
};

SCENES.about1 = function () {
  return wrap(
    skyBg("sbAb1", "#bfe4f0", "#fbeccc") +
    '<circle cx="60" cy="60" r="28" fill="#f4b73c" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="0" y="320" width="480" height="120" fill="#7a5230" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="0" y="312" width="480" height="14" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M240 322 Q200 360 150 380 M240 322 Q280 360 330 380 M240 322 Q238 370 240 392 M240 340 Q210 372 190 400 M240 340 Q270 372 292 400" fill="none" stroke="#c99a62" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M226 322 Q232 250 218 190 L262 190 Q248 250 254 322 Z" fill="#8a5a2c" stroke="' + INK + '" stroke-width="4"/>' +
    '<g fill="#44703a" stroke="' + INK + '" stroke-width="4"><circle cx="180" cy="150" r="46"/><circle cx="300" cy="150" r="46"/><circle cx="240" cy="108" r="54"/></g>' +
    '<g fill="#6f9a5a"><circle cx="215" cy="92" r="12"/><circle cx="275" cy="120" r="10"/><circle cx="170" cy="140" r="9"/></g>' +
    '<g fill="#dd9b16" stroke="' + INK + '" stroke-width="1.6"><circle cx="205" cy="125" r="6"/><circle cx="265" cy="95" r="6"/><circle cx="290" cy="160" r="6"/></g>' +
    pill(240, 20, 190, "Deeper understanding", 14, "#fff7e2", "#44703a") +
    '<rect x="140" y="404" width="200" height="26" rx="13" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<text class="sb-svg-text" x="240" y="422" font-size="14" text-anchor="middle" fill="#7d1c0e" font-weight="700">Simple spoken patterns</text>' +
    fig(96, 318, .9, { who: "anand", r: [60, -62] }) +
    '<g transform="translate(156 262)"><path d="M0 0 H30 V26 H0 Z" fill="#9a9a9a" stroke="' + INK + '" stroke-width="2.4"/><path d="M30 6 L48 18" stroke="#9a9a9a" stroke-width="6"/><path d="M50 22 q4 10 2 18 M44 26 q2 12 -2 22" stroke="#4f8fb8" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>' +
    fig(390, 318, .9, { who: "rahul", r: [40, -128] })
  );
};



/* ---------------- CONTACT ---------------- */
// SCENES.contact0 = function () {
  // return wrap(
    // skyBg("sbCt0", "#f6c98a", "#fbe9b8") +
    // '<rect x="30" y="120" width="420" height="232" fill="#f0d9a8" stroke="' + INK + '" stroke-width="4"/>' +
    // '<path d="M12 120 L240 40 L468 120 Z" fill="#b5301d" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>' +
    // '<rect x="186" y="150" width="108" height="202" rx="4" fill="#6b4423" stroke="' + INK + '" stroke-width="4"/>' +
    // '<rect x="196" y="160" width="88" height="192" fill="#fde28a" opacity=".55"/>' +
    // '<circle cx="120" cy="206" r="28" fill="#f4b73c" opacity=".4"/><path d="M112 194 H128 L132 216 Q120 226 108 216 Z" fill="#fde28a" stroke="' + INK + '" stroke-width="2.4"/>' +
    // '<circle cx="360" cy="206" r="28" fill="#f4b73c" opacity=".4"/><path d="M352 194 H368 L372 216 Q360 226 348 216 Z" fill="#fde28a" stroke="' + INK + '" stroke-width="2.4"/>' +
    // '<rect x="0" y="352" width="480" height="88" fill="#8fb36f" stroke="' + INK + '" stroke-width="3"/>' +
    // /* table and open guest book */
    // '<rect x="168" y="334" width="144" height="12" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/><rect x="178" y="346" width="9" height="40" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/><rect x="293" y="346" width="9" height="40" fill="#7a4a22" stroke="' + INK + '" stroke-width="2"/>' +
    // '<path d="M240 332 L196 322 L200 296 L240 306 Z" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    // '<path d="M240 332 L284 322 L280 296 L240 306 Z" fill="#fff0cc" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    // '<path d="M208 310 L232 316 M208 318 L232 324 M248 316 L272 310 M248 324 L272 318" stroke="#b5301d" stroke-width="2" stroke-linecap="round"/>' +
    // fig(110, 432, 1.0, { who: "rahul", l: [-30, -52], r: [58, -98] }) +
    // '<path d="M168 334 L178 326" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>' +
    // fig(372, 432, 1.0, { who: "anand", l: [-62, -98], r: [30, -52] }) +
    // bubble(240, 176, 160, 40, "What is your name?", 14, "r") +
    // bubble(40, 196, 110, 40, "Rohan", 20, "r")
  // );
// };


/* =====================================================================
   SCENES ADDED FOR THE 9-PROGRAM STRUCTURE
   ===================================================================== */
SCENES.vocab = function () {
  var jars = [["Numbers", "#dd9b16"], ["Family", "#b5301d"], ["Food", "#44703a"], ["Colours", "#8a2f6b"], ["Body", "#4f8fb8"], ["Weather", "#27386b"]], out = "", i, x, y;
  for (i = 0; i < 6; i++) {
    x = 30 + (i % 3) * 145;
    y = i < 3 ? 96 : 212;
    out += '<rect x="' + x + '" y="' + y + '" width="110" height="82" rx="14" fill="' + jars[i][1] + '" stroke="' + INK + '" stroke-width="3"/>' +
      '<rect x="' + (x + 22) + '" y="' + (y - 14) + '" width="66" height="16" rx="5" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/>' +
      '<rect x="' + (x + 10) + '" y="' + (y + 26) + '" width="90" height="30" rx="5" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.4"/>' +
      '<text class="sb-svg-text" x="' + (x + 55) + '" y="' + (y + 47) + '" font-size="15" text-anchor="middle" fill="' + INK + '" font-weight="800">' + jars[i][0] + '</text>';
  }
  return wrap(
    '<rect width="480" height="440" fill="#ead6a4"/>' +
    '<rect x="14" y="178" width="452" height="12" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<rect x="14" y="294" width="452" height="12" rx="3" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.6"/>' +
    out +
    '<rect x="0" y="368" width="480" height="72" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' +
    pill(240, 34, 170, "Word by word", 16, "#fff3cf", "#7d1c0e") +
    fig(120, 434, 1.0, { who: "rahul", l: [-30, -52], r: [52, -64] }) +
    '<path d="M150 352 H214 L206 388 H158 Z" fill="#c99a62" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/><path d="M156 352 Q182 322 208 352" fill="none" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="168" cy="344" r="6" fill="#dd9b16" stroke="' + INK + '" stroke-width="1.6"/><circle cx="184" cy="340" r="6" fill="#b5301d" stroke="' + INK + '" stroke-width="1.6"/><circle cx="198" cy="345" r="6" fill="#44703a" stroke="' + INK + '" stroke-width="1.6"/>' +
    fig(380, 434, 1.0, { who: "anand", r: [46, -134] })
  );
};

SCENES.writing = function () {
  var banners = "", cols = ["#b5301d", "#44703a", "#27386b"], names = ["Then", "Now", "Next"], i, x;
  for (i = 0; i < 3; i++) {
    x = 90 + i * 150;
    banners += '<path d="M' + (x - 38) + ' 40 H' + (x + 38) + ' V108 L' + x + ' 128 L' + (x - 38) + ' 108 Z" fill="' + cols[i] + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<text class="sb-svg-text" x="' + x + '" y="86" font-size="20" text-anchor="middle" fill="#fff7e2" font-weight="800">' + names[i] + '</text>';
  }
  return wrap(
    '<rect width="480" height="440" fill="#efe3c4"/>' +
    '<rect x="30" y="26" width="420" height="10" rx="4" fill="#7a4a22" stroke="' + INK + '" stroke-width="2.4"/>' + banners +
    '<rect x="0" y="372" width="480" height="68" fill="#c99a62" stroke="' + INK + '" stroke-width="3"/>' +
    fig(190, 402, 1.0, { who: "rahul", l: [-30, -40], r: [62, -80] }) +
    '<rect x="110" y="322" width="260" height="14" rx="3" fill="#8a5a2c" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="120" y="336" width="240" height="66" fill="#7a4a22" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M240 322 L204 314 L208 298 L240 306 Z" fill="#fff7e2" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M240 322 L276 314 L272 298 L240 306 Z" fill="#fff0cc" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M214 308 L234 313 M216 316 L234 320 M246 313 L266 308 M246 320 L264 316" stroke="#b5301d" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M250 318 L260 300" stroke="#27386b" stroke-width="4" stroke-linecap="round"/>' +
    hourglass(338, 288, "done") +
    fig(426, 428, .9, { who: "anand", l: [-40, -60] }) +
    bubble(30, 190, 170, 40, "I wrote it down!", 15, "r")
  );
};

SCENES.alumni = function () {
  var lights = "", i, t;
  for (i = 0; i <= 12; i++) {
    t = i / 12;
    lights += '<circle cx="' + (20 + 440 * t).toFixed(1) + '" cy="' + (30 + 70 * t * (1 - t)).toFixed(1) + '" r="5" fill="#ffe27a" stroke="' + INK + '" stroke-width="1.2"/>';
  }
  return wrap(
    skyBg("sbAlum", "#2b1c4a", "#6a4a8a") +
    '<g fill="#fff"><circle cx="50" cy="150" r="2"/><circle cx="430" cy="140" r="2"/><circle cx="90" cy="200" r="1.6"/></g>' +
    lights +
    '<rect x="130" y="70" width="220" height="128" rx="4" fill="#fff7e2" stroke="#7a4a22" stroke-width="6"/>' +
    '<path d="M136 192 L190 132 L226 170 L262 120 L344 192 Z" fill="#8fb0c8" stroke="' + INK + '" stroke-width="2"/><circle cx="310" cy="104" r="14" fill="#f4b73c" stroke="' + INK + '" stroke-width="2"/>' +
    pill(240, 206, 150, "Movie night", 14, "#fff3cf", "#7d1c0e") +
    '<rect x="0" y="330" width="480" height="110" fill="#6f9a5a" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="14" y="384" width="170" height="48" rx="6" fill="#d98aa6" stroke="' + INK + '" stroke-width="3"/>' +
    '<rect x="296" y="384" width="170" height="48" rx="6" fill="#6fb5a8" stroke="' + INK + '" stroke-width="3"/>' +
    fig(62, 414, .75, { who: "local", pose: "sit", top: "#dd9b16" }) +
    fig(125, 418, .75, { who: "local", pose: "sit", f: true, top: "#b5301d" }) +
    fig(358, 414, .75, { who: "local", pose: "sit", top: "#4f8fb8" }) +
    fig(422, 418, .75, { who: "local", pose: "sit", f: true, top: "#44703a" }) +
    fig(205, 410, .9, { who: "anand", r: [40, -72] }) +
    fig(282, 410, .9, { who: "rahul", l: [-40, -72] })
  );
};

SCENES.stageSpeak = function () {
  return signpost(["1 · First Steps", "2 · In Context", "3 · In Flow", "4 · Word by Word"], 14.5);
};
SCENES.stageRead = function () {
  return signpost(["5 · Meet the Letters", "6 · With Clarity", "7 · On the Page", "8 · Rich Conversations"], 14);
};
SCENES.stageBelong = function () { return SCENES.alumni(); };

SCENES.prog1 = function () { return SCENES.program1(); };
SCENES.prog2 = function () { return SCENES.program2(); };
SCENES.prog3 = function () { return SCENES.program4(); };
SCENES.prog4 = function () { return SCENES.vocab(); };
SCENES.prog5 = function () { return SCENES.script(); };
SCENES.prog6 = function () { return SCENES.program3(); };
SCENES.prog7 = function () { return SCENES.writing(); };
SCENES.prog8 = function () { return SCENES.program5(); };
SCENES.prog9 = function () { return SCENES.program6(); };


/* =====================================================================
   WORDS WRITTEN OVER THE PICTURES
   Change the words here and they change on the picture.
   Positions use a space of 480 across and 320 down.
   ===================================================================== */
function ribbon(cx, y, w, h, text, size) {
  var x = cx - w / 2;
  return '<path d="M' + (x - 10) + ' ' + y + ' H' + (x + w + 10) + ' L' + (x + w) + ' ' + (y + h / 2) + ' L' + (x + w + 10) + ' ' + (y + h) + ' H' + (x - 10) + ' L' + x + ' ' + (y + h / 2) + ' Z" fill="#b5301d" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<text class="sb-svg-text" x="' + cx + '" y="' + (y + h / 2 + size / 3) + '" font-size="' + size + '" text-anchor="middle" fill="#fff7e2" font-weight="800">' + text + '</text>';
}
var OVERLAYS = {
  /* Home: both say Namaskara, and a Welcome ribbon lies on the path */
  home1: function () {
    return bubble(26, 4, 130, 32, "Namaskara!", 17, "r") +
      bubble(228, 6, 122, 32, "Namaskara!", 17, "r") +
      ribbon(218, 282, 80, 22, "Welcome", 15);
  },
  // /* Contact page 1: the student gives his name, the teacher asks it */
  // contact0: function () {
    // return bubble(95, 2, 110, 30, "Rohan", 20, "r") +
      // bubble(340, 6, 136, 32, "What is your name?", 12, "l");
  // },
  // /* Contact page 2: a Welcome ribbon across the top */
  // contact1: function () {
    // return ribbon(197, 8, 130, 26, "Welcome", 19);
  // }
};
function photoScene(p, slot) {
  var ov = OVERLAYS[slot] ? OVERLAYS[slot]() : "";
  return '<svg class="sb-svg-photo" style="aspect-ratio:3 / 2" viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" role="img">' +
    '<image href="' + p.src + '" xlink:href="' + p.src + '" x="0" y="0" width="1536" height="1024" preserveAspectRatio="xMidYMid meet"/>' +
    '<g transform="scale(3.2)">' + ov + '</g></svg>';
}
/* if the Contact page 2 picture file is missing, the gate drawing is shown */
SCENES.contact1 = function () { return SCENES.finale(); };

/* ---------------------------------------------------------------------
   Fills each picture slot: your image if set, otherwise the drawing.
   --------------------------------------------------------------------- */
(function () {
  function drawing(slot) {
    var make = SCENES[slot] || SCENES.cover;
    return make();
  }

  /* Draws ONE picture slot. */
  function fillOne(el) {
    var slot = el.getAttribute("data-slot");
    var alt = el.getAttribute("data-alt") || "";
    var src = IMAGES[slot];
    function mark() {
      el.setAttribute("role", "img");
      el.setAttribute("aria-label", alt);
    }
    function useDrawing() {
      el.innerHTML = drawing(slot);
      mark();
    }
    if (src) {
      var img = new Image();
      img.alt = alt;
      img.onerror = useDrawing;
      img.src = src;
      el.innerHTML = "";
      el.appendChild(img);
    } else if (PHOTOS[slot]) {
      /* your painted picture with the words on it; the drawing if the file is missing */
      var probe = new Image();
      probe.onload = function () { el.innerHTML = photoScene(PHOTOS[slot], slot); mark(); };
      probe.onerror = useDrawing;
      el.innerHTML = "";
      probe.src = PHOTOS[slot].src;
    } else {
      useDrawing();
    }
  }

  /* Draws every slot. One failing picture can no longer stop the others. */
  function fillSlots(root) {
    var slots = (root || document).querySelectorAll(".sb-art[data-slot]");
    for (var i = 0; i < slots.length; i++) {
      if (root && slots[i].querySelector("svg, img")) continue;   /* already drawn */
      try {
        fillOne(slots[i]);
      } catch (err) {
        if (window.console) console.error("Storybook picture failed for slot '" + slots[i].getAttribute("data-slot") + "':", err);
      }
    }
  }

  /* ------------------------------------------------------------------
     3) PAGE-TURNING
     ------------------------------------------------------------------ */
  function initBook() {
    var book = document.getElementById("sbBook");
    if (!book) return;

    var spreads = book.querySelectorAll(".sb-spread");
    var dotsBox = document.getElementById("sbDots");
    var counter = document.getElementById("sbCounter");
    var prevBtns = document.querySelectorAll("[data-sb-prev]");
    var nextBtns = document.querySelectorAll("[data-sb-next]");
    var firstBtns = document.querySelectorAll("[data-sb-first]");
    var total = spreads.length;
    var current = -1;
    var dotButtons = [];
    var d, p, n, f;

    for (d = 0; d < total; d++) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Go to page " + (d + 1) + ": " + spreads[d].getAttribute("data-title"));
      (function (index) {
        b.addEventListener("click", function () { go(index); });
      })(d);
      li.appendChild(b);
      dotsBox.appendChild(li);
      dotButtons.push(b);
    }

    function go(index, silent) {
      if (index < 0 || index >= total || index === current) return;
      var dir = index > current ? "sb-go-next" : "sb-go-prev";
      for (var i = 0; i < total; i++) {
        spreads[i].classList.remove("is-active", "sb-go-next", "sb-go-prev");
      }
      current = index;
      spreads[current].classList.add("is-active");
      fillSlots(spreads[current]);   /* safety net: draw this page's picture if it is still missing */
      if (!silent) spreads[current].classList.add(dir);
      update();
      if (!silent) {
        try {
          history.replaceState(null, "", "#" + (spreads[current].id || "page-" + (current + 1)));
        } catch (err) { /* address-bar update is optional */ }
      }
    }

    function update() {
      var i;
      for (i = 0; i < total; i++) {
        if (i === current) dotButtons[i].setAttribute("aria-current", "true");
        else dotButtons[i].removeAttribute("aria-current");
      }
      for (i = 0; i < prevBtns.length; i++) prevBtns[i].disabled = current === 0;
      for (i = 0; i < nextBtns.length; i++) {
        if (nextBtns[i].classList.contains("sb-turn")) nextBtns[i].disabled = current === total - 1;
      }
      counter.textContent = "Page " + (current + 1) + " of " + total + " · " + spreads[current].getAttribute("data-title");
    }

    for (p = 0; p < prevBtns.length; p++) prevBtns[p].addEventListener("click", function () { go(current - 1); });
    for (n = 0; n < nextBtns.length; n++) nextBtns[n].addEventListener("click", function () { go(current + 1); });
    for (f = 0; f < firstBtns.length; f++) firstBtns[f].addEventListener("click", function () { go(0); });

    /* any button with data-sb-goto="3" jumps to that page (counting from 0) */
    var gotoBtns = document.querySelectorAll("[data-sb-goto]");
    for (var g = 0; g < gotoBtns.length; g++) {
      (function (btn) {
        btn.addEventListener("click", function () { go(parseInt(btn.getAttribute("data-sb-goto"), 10)); });
      })(gotoBtns[g]);
    }

    window.sbKeyHandler = function (e) {
      var tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") go(current + 1);
      else if (e.key === "ArrowLeft") go(current - 1);
    };
    if (!window.sbKeyBound) {
      window.sbKeyBound = true;
      document.addEventListener("keydown", function (e) { if (window.sbKeyHandler) window.sbKeyHandler(e); });
    }

    var startX = null, startY = null;
    book.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }, { passive: true });
    book.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      startX = startY = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });

    /* open directly on a chapter, e.g. programs.html#program-3 */
    var start = 0;
    var hash = window.location.hash.replace("#", "");
    if (hash) {
      for (var s = 0; s < total; s++) {
        if (spreads[s].id === hash) { start = s; break; }
      }
    }
    go(start, true);
  }

  /* ------------------------------------------------------------------
     ENQUIRY FORM (only on contact.html)
     ------------------------------------------------------------------ */
  function initEnquiry() {
    var form = document.getElementById("sbEnquiry");
    if (!form) return;
    var box = document.getElementById("sbEnquiryStatus");
    var btn = form.querySelector("button[type=submit]");

    function say(text, kind) {
      box.textContent = text;
      box.className = "sb-status sb-status--" + kind;
    }
    /* read a field by its name (form.name would give the form's own name, so use elements) */
    function val(name) {
      var f = form.elements[name];
      return f && f.value ? String(f.value).replace(/^\s+|\s+$/g, "") : "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (val("website")) return;                                 /* spam trap: real people leave it empty */
      if (form.reportValidity && !form.reportValidity()) return;

      if (!ENQUIRY.supabaseUrl || !ENQUIRY.supabaseKey || !ENQUIRY.table) {
        say("Thank you for your interest! We are not collecting enquiries just yet. Please visit again soon.", "info");
        return;
      }

      var row = {
        name:     val("name"),
        email:    val("email"),
        phone:    val("phone") || null,
        category: val("role"),
        level:    val("level"),
        goal:     val("goal"),
        details:  val("message") || null
      };

      btn.disabled = true;
      say("Sending…", "info");
      fetch(ENQUIRY.supabaseUrl.replace(/\/+$/, "") + "/rest/v1/" + encodeURIComponent(ENQUIRY.table), {
        method: "POST",
        headers: {
          "apikey": ENQUIRY.supabaseKey,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(row)
      }).then(function (res) {
        if (!res.ok) {
          return res.text().then(function (t) { throw new Error("Supabase answered " + res.status + ": " + t); });
        }
        form.reset();
        say(ENQUIRY.successMessage || "Thank you! Your enquiry has been received. We will be in touch.", "ok");
      }).catch(function (err) {
        if (window.console) console.error("Enquiry could not be saved:", err);
        say("Sorry, we could not send your enquiry just now. Please try again in a little while.", "error");
      }).then(function () { btn.disabled = false; });
    });
  }

  function ready() {
    fillSlots();
    initBook();
    initEnquiry();
  }

  window.sbInit = ready;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();

// Create the lightbox overlay once
/*document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = '<img id="lightbox-img" alt="Enlarged view">';
  // overlay.onclick = () => overlay.classList.remove('active');
  overlay.onclick = (e) => {
  if (e.target.id === 'lightbox-img') {
    e.target.classList.toggle('zoomed');
  } else {
    overlay.classList.remove('active');
    document.getElementById('lightbox-img').classList.remove('zoomed');
  }
};

  document.body.appendChild(overlay);

  // Make every .sb-art image clickable
  document.querySelectorAll('.sb-art').forEach(div => {
    div.onclick = () => {
      const imageEl = div.querySelector('image');
      const url = imageEl?.getAttribute('href') || imageEl?.getAttribute('xlink:href');
      if (!url) return;
      document.getElementById('lightbox-img').src = url;
      overlay.classList.add('active');
    };
  });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML =
    '<button id="lightbox-close">✕</button>' +
    '<div id="lightbox-hint">tap image to zoom in</div>' +
    '<img id="lightbox-img" alt="Enlarged view">';
  document.body.appendChild(overlay);
  
  const img = document.getElementById('lightbox-img');
  const hint = document.getElementById('lightbox-hint');

  function closeLightbox() {
    overlay.classList.remove('active', 'zoomed');
    img.classList.remove('zoomed');
  }

  document.getElementById('lightbox-close').onclick = closeLightbox;

  overlay.onclick = (e) => {
    if (e.target === img) {
      overlay.classList.toggle('zoomed');
      img.classList.toggle('zoomed');
      hint.style.display = overlay.classList.contains('zoomed') ? 'none' : 'block';
    } else if (e.target === overlay) {
      closeLightbox();
    }
  };

  document.querySelectorAll('.sb-art').forEach(div => {
    div.onclick = () => {
      const imageEl = div.querySelector('image');
      const url = imageEl?.getAttribute('href') || imageEl?.getAttribute('xlink:href');
      if (!url) return;
      img.src = url;
      overlay.classList.add('active');
      hint.style.display = 'flex';
    };
  });
});
