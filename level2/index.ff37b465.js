function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiredf3e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiredf3e"] = parcelRequire;
}
parcelRequire.register("apYFO", function(module, exports) {

var $49pUz = parcelRequire("49pUz");

var $jgsti = parcelRequire("jgsti");

var $6mhZf = parcelRequire("6mhZf");

var $2Y9dv = parcelRequire("2Y9dv");

var $kLW5f = parcelRequire("kLW5f");

var $gSwgq = parcelRequire("gSwgq");

var $12kOc = parcelRequire("12kOc");
//Defining Level 2 Scene's Properties
const sceneProperties = {
    cancelExecution: false,
    phase: 0,
    executing: false
};
let extinguisherUses;
function displayExtinguisherUses() {
    document.getElementById("extinguisherUses").innerText = `x${extinguisherUses}`;
}
let fireState;
let setFireStates;
let setFireStatesInterval;
let spikeTrapState;
let setSpikeTrapState;
let setSpikeTrapStateInterval;
const editor = (0, $jgsti.generateDefaultEditor)(document.getElementById("editorArea"));
const andarFrenteBtn = document.getElementById("andarFrente");
andarFrenteBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "andarFrente(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "andarFrente(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const andarTrasBtn = document.getElementById("andarTras");
andarTrasBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "andarTras(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "andarTras(?)\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const girarEsquerdaBtn = document.getElementById("girarEsquerda");
girarEsquerdaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "girarEsquerda()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "girarEsquerda()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const girarDireitaBtn = document.getElementById("girarDireita");
girarDireitaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "girarDireita()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "girarDireita()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const darMeiaVoltaBtn = document.getElementById("darMeiaVolta");
darMeiaVoltaBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "darMeiaVolta()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "darMeiaVolta()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const apagarFogoBtn = document.getElementById("apagarFogo");
apagarFogoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "apagarFogo()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "apagarFogo()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const coletarCristalBtn = document.getElementById("coletarCristal");
coletarCristalBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "coletarCristal()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "coletarCristal()\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const pegandoFogoBtn = document.getElementById("pegandoFogo");
pegandoFogoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "pegandoFogo()"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "pegandoFogo()"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const condicaoBtn = document.getElementById("condicao");
condicaoBtn.addEventListener("click", ()=>{
    let cursorAnchor = editor.state.selection.main.anchor;
    let cursorHead = editor.state.selection.main.head;
    let transaction;
    let actualLine;
    if (cursorAnchor <= cursorHead) {
        transaction = editor.state.update({
            changes: {
                from: cursorAnchor,
                to: cursorHead,
                insert: "se(?){\n\n}\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorAnchor).number;
    } else {
        transaction = editor.state.update({
            changes: {
                from: cursorHead,
                to: cursorAnchor,
                insert: "se(?){\n\n}\n"
            }
        });
        actualLine = editor.state.doc.lineAt(cursorHead).number;
    }
    editor.dispatch(transaction);
    editor.focus();
    let nextLinePos = editor.state.doc.line(actualLine + 1).to;
    editor.dispatch({
        selection: {
            anchor: nextLinePos
        }
    });
});
const consoleElement = document.getElementById("consoleArea");
const { renderer , scene , camera , controls  } = (0, $6mhZf.generateDefaultSceneObjects)(document.getElementById("phaseView"));
const gridMapHelper = new (0, $2Y9dv.default)();
const plane = gridMapHelper.createGridPlane();
const actor = (0, $6mhZf.loadDefaultActor)();
let objectives;
let walls;
let traps;
const fireClock = new $49pUz.Clock();
let fires;
function changeFireActiveStatus(index, status) {
    gridMapHelper.fires[index].active = status;
    fires[index].setFireVisibility(status);
}
function firesVisualRestart() {
    for(let i = 0; i < fires.length; i++)fires[i].setFireVisibility(true);
}
scene.add(plane);
scene.add(actor);
async function andarFrente(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, $6mhZf.translateActor)(actor, correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function andarTras(amount) {
    let correctedAmount = amount > 10 ? 10 : amount;
    await (0, $6mhZf.translateActor)(actor, -correctedAmount, gridMapHelper, sceneProperties, consoleElement);
}
async function girarEsquerda() {
    await (0, $6mhZf.rotateActor)(actor, 90, sceneProperties, 1);
}
async function girarDireita() {
    await (0, $6mhZf.rotateActor)(actor, 90, sceneProperties, -1);
}
async function darMeiaVolta() {
    await (0, $6mhZf.rotateActor)(actor, 180, sceneProperties, 1);
}
function pegandoFogo() {
    const vec = new $49pUz.Vector3();
    actor.getObjectByName("interactionReference").getWorldPosition(vec);
    if (gridMapHelper.detectFire(vec) != null) return true;
    else return false;
}
function apagarFogo() {
    if (extinguisherUses > 0) {
        const vec = new $49pUz.Vector3();
        actor.getObjectByName("interactionReference").getWorldPosition(vec);
        let fireIndex = gridMapHelper.detectFire(vec);
        if (fireIndex != null) changeFireActiveStatus(fireIndex, false);
        extinguisherUses--;
        displayExtinguisherUses();
    } else consoleElement.innerText += "Aviso: Rob\xf4 est\xe1 sem extintores!\n";
}
function badLuck(position) {
    const vector = new $49pUz.Vector3(gridMapHelper.getGlobalXPositionFromCoord(position[0]), 0, gridMapHelper.getGlobalZPositionFromCoord(position[1]));
    let fireIndex = gridMapHelper.detectFire(vector, false);
    if (fireIndex != null) changeFireActiveStatus(fireIndex, true);
}
let coletarCristal;
let resetLevel;
let winCondition;
const phaseGeneration = [];
//Functions to create the phases
//Phase 1
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 1 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    extinguisherUses = 1;
    camera.position.set(0, 15, 30);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(9, 9, 5, 5);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(18, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    scene.add(walls[0]);
    scene.add(walls[1]);
    gridMapHelper.addObstacle(1, 9, 4, 4);
    gridMapHelper.addObstacle(1, 9, 6, 6);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addFire(7, 5);
    scene.add(fires[0]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.restartFires();
        fires[0].setFireVisibility(true);
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
});
//Phase 2
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 2 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar ao cristal, ap\xf3s isso, o colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(1);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(9, 9, 5, 5);
    scene.add(objectives[0]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(14, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    gridMapHelper.addObstacle(2, 8, 2, 2);
    gridMapHelper.addObstacle(2, 8, 4, 4);
    gridMapHelper.addObstacle(2, 8, 6, 6);
    gridMapHelper.addObstacle(2, 8, 8, 8);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(6));
    gridMapHelper.addFire(3, 3);
    gridMapHelper.addFire(6, 3);
    gridMapHelper.addFire(3, 7);
    gridMapHelper.addFire(6, 7);
    gridMapHelper.addFire(9, 6);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(0, false);
            changeFireActiveStatus(3, false);
            changeFireActiveStatus(1, true);
            changeFireActiveStatus(4, true);
        } else {
            changeFireActiveStatus(0, true);
            changeFireActiveStatus(3, true);
            changeFireActiveStatus(1, false);
            changeFireActiveStatus(4, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    scene.add(fires[3]);
    scene.add(fires[4]);
    traps = [];
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(2));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0, gridMapHelper.getGlobalZPositionFromCoord(8));
    gridMapHelper.addTrap(9, 2, traps[0]);
    gridMapHelper.addTrap(8, 5, traps[1]);
    gridMapHelper.addTrap(9, 8, traps[2]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado com sucesso.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, $gSwgq.trapsDeactivation)(traps);
        else (0, $gSwgq.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 3
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 3 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(9));
    gridMapHelper.addObstacle(0, 0, 0, 0);
    gridMapHelper.addObstacle(9, 9, 9, 9);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(12, 2, 2);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 14);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3.5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(1, 6, 2, 2);
    gridMapHelper.addObstacle(2, 2, 1, 1);
    gridMapHelper.addObstacle(8, 8, 7, 7);
    gridMapHelper.addObstacle(7, 7, 3, 8);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 0.1, gridMapHelper.getGlobalZPositionFromCoord(2));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0.1, gridMapHelper.getGlobalZPositionFromCoord(0));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    gridMapHelper.addFire(0, 2);
    gridMapHelper.addFire(2, 0);
    gridMapHelper.addFire(9, 7);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(1, false);
            changeFireActiveStatus(2, true);
        } else {
            changeFireActiveStatus(1, true);
            changeFireActiveStatus(2, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
});
//Phase 4
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 4 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(9));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(9, 9, 9, 9);
    gridMapHelper.addObstacle(9, 9, 0, 0);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(16, 2, 2);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 6);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 8);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4.5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(4.5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(1.5));
    gridMapHelper.addObstacle(1, 8, 4, 4);
    gridMapHelper.addObstacle(1, 8, 6, 6);
    gridMapHelper.addObstacle(8, 8, 7, 9);
    gridMapHelper.addObstacle(8, 8, 0, 3);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    gridMapHelper.addFire(9, 3);
    gridMapHelper.addFire(9, 7);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(0, false);
            changeFireActiveStatus(1, true);
        } else {
            changeFireActiveStatus(0, true);
            changeFireActiveStatus(1, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
});
//Phase 5
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 5 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.0, gridMapHelper.getGlobalZPositionFromCoord(7));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addObstacle(5, 5, 7, 7);
    gridMapHelper.addObstacle(5, 5, 3, 3);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(10, 2, 2);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 6);
    const boxGeometry4 = new $49pUz.BoxGeometry(4, 2, 6);
    const boxGeometry5 = new $49pUz.BoxGeometry(12, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry5, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(3.5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(5.5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    gridMapHelper.addObstacle(3, 7, 8, 8);
    gridMapHelper.addObstacle(7, 7, 6, 6);
    gridMapHelper.addObstacle(3, 4, 4, 6);
    gridMapHelper.addObstacle(6, 6, 4, 6);
    gridMapHelper.addObstacle(3, 8, 2, 2);
    gridMapHelper.addObstacle(7, 7, 4, 4);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    traps = [];
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addTrap(5, 5, traps[0]);
    scene.add(traps[0]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addFire(3, 7);
    gridMapHelper.addFire(7, 7);
    gridMapHelper.addFire(7, 3);
    gridMapHelper.addFire(3, 3);
    gridMapHelper.addFire(9, 2);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(1, false);
            changeFireActiveStatus(2, true);
        } else {
            changeFireActiveStatus(1, true);
            changeFireActiveStatus(2, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    scene.add(fires[3]);
    scene.add(fires[4]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, $gSwgq.trapsDeactivation)(traps);
        else (0, $gSwgq.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 6
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 6 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.0, gridMapHelper.getGlobalZPositionFromCoord(7));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addObstacle(5, 5, 7, 7);
    gridMapHelper.addObstacle(7, 7, 0, 0);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(14, 2, 2);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 6);
    const boxGeometry4 = new $49pUz.BoxGeometry(4, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].rotateY((0, $6mhZf.degreeToRadians)(90));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[5].rotateY((0, $6mhZf.degreeToRadians)(90));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2.5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    gridMapHelper.addObstacle(2, 8, 8, 8);
    gridMapHelper.addObstacle(2, 2, 6, 6);
    gridMapHelper.addObstacle(4, 4, 6, 6);
    gridMapHelper.addObstacle(5, 5, 4, 6);
    gridMapHelper.addObstacle(4, 6, 2, 2);
    gridMapHelper.addObstacle(8, 8, 1, 7);
    gridMapHelper.addObstacle(6, 6, 1, 1);
    gridMapHelper.addObstacle(2, 3, 4, 4);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    traps = [];
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0, gridMapHelper.getGlobalZPositionFromCoord(3));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(6));
    traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addTrap(2, 5, traps[0]);
    gridMapHelper.addTrap(2, 3, traps[1]);
    gridMapHelper.addTrap(2, 7, traps[2]);
    gridMapHelper.addTrap(6, 6, traps[3]);
    gridMapHelper.addTrap(5, 3, traps[4]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    scene.add(traps[3]);
    scene.add(traps[4]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(5));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.1, gridMapHelper.getGlobalZPositionFromCoord(0));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(0));
    fires[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addFire(7, 5);
    gridMapHelper.addFire(5, 0);
    gridMapHelper.addFire(9, 0);
    gridMapHelper.addFire(7, 2);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(0, false);
            changeFireActiveStatus(3, true);
        } else {
            changeFireActiveStatus(0, true);
            changeFireActiveStatus(3, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    scene.add(fires[3]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, $gSwgq.trapsDeactivation)(traps);
        else (0, $gSwgq.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 7
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 7 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(2);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addObstacle(3, 3, 5, 5);
    gridMapHelper.addObstacle(7, 7, 3, 3);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(14, 2, 2);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 6);
    const boxGeometry4 = new $49pUz.BoxGeometry(4, 2, 2);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry4, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(8));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(3));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(2.5), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(1));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(2.5), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(7));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(7.5), 1, gridMapHelper.getGlobalZPositionFromCoord(5));
    walls[10].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(2.5));
    walls[10].rotateY((0, $6mhZf.degreeToRadians)(90));
    gridMapHelper.addObstacle(2, 8, 8, 8);
    gridMapHelper.addObstacle(2, 2, 7, 7);
    gridMapHelper.addObstacle(2, 2, 3, 3);
    gridMapHelper.addObstacle(5, 5, 4, 6);
    gridMapHelper.addObstacle(2, 3, 6, 6);
    gridMapHelper.addObstacle(8, 8, 1, 7);
    gridMapHelper.addObstacle(5, 5, 2, 2);
    gridMapHelper.addObstacle(2, 3, 4, 4);
    gridMapHelper.addObstacle(8, 8, 7, 7);
    gridMapHelper.addObstacle(7, 8, 5, 5);
    gridMapHelper.addObstacle(8, 8, 2, 3);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    scene.add(walls[10]);
    traps = [];
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0, gridMapHelper.getGlobalZPositionFromCoord(3));
    gridMapHelper.addTrap(2, 5, traps[0]);
    gridMapHelper.addTrap(5, 3, traps[1]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0.1, gridMapHelper.getGlobalZPositionFromCoord(9));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0.1, gridMapHelper.getGlobalZPositionFromCoord(0));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0.1, gridMapHelper.getGlobalZPositionFromCoord(5));
    fires[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.1, gridMapHelper.getGlobalZPositionFromCoord(6));
    fires[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0.1, gridMapHelper.getGlobalZPositionFromCoord(4));
    fires[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0.1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addFire(2, 9);
    gridMapHelper.addFire(2, 0);
    gridMapHelper.addFire(6, 5);
    gridMapHelper.addFire(8, 6);
    gridMapHelper.addFire(8, 4);
    gridMapHelper.addFire(4, 5);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(2, false);
            changeFireActiveStatus(3, false);
            changeFireActiveStatus(4, false);
            changeFireActiveStatus(0, true);
            changeFireActiveStatus(1, true);
            changeFireActiveStatus(5, true);
        } else {
            changeFireActiveStatus(2, true);
            changeFireActiveStatus(3, true);
            changeFireActiveStatus(4, true);
            changeFireActiveStatus(0, false);
            changeFireActiveStatus(1, false);
            changeFireActiveStatus(5, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    scene.add(fires[3]);
    scene.add(fires[4]);
    scene.add(fires[5]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        objectives[0].visible = true;
        objectives[1].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible) return true;
        else return false;
    };
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, $gSwgq.trapsDeactivation)(traps);
        else (0, $gSwgq.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Phase 8
phaseGeneration.push(()=>{
    document.getElementById("phaseTitle").innerText = "N\xedvel 2 - Fase 8 de 8";
    document.getElementById("phaseObjective").innerText = "Fa\xe7a o rob\xf4 chegar aos cristais, ap\xf3s isso, os colete.";
    extinguisherUses = 1;
    displayExtinguisherUses();
    sceneProperties.executing = false;
    camera.position.set(0, 15, 30);
    camera.rotation.set(0, 0, 0);
    actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
    objectives = (0, $6mhZf.loadDefaultObjectives)(3);
    objectives[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    objectives[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    objectives[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.0, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addObstacle(3, 3, 5, 5);
    gridMapHelper.addObstacle(5, 5, 5, 5);
    gridMapHelper.addObstacle(7, 7, 5, 5);
    scene.add(objectives[0]);
    scene.add(objectives[1]);
    scene.add(objectives[2]);
    walls = [];
    const boxGeometry = new $49pUz.BoxGeometry(2, 2, 4);
    const boxGeometry2 = new $49pUz.BoxGeometry(2, 2, 2);
    const boxGeometry3 = new $49pUz.BoxGeometry(2, 2, 6);
    const boxMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(0,255,0)"
    });
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry2, boxMaterial));
    walls.push(new $49pUz.Mesh(boxGeometry3, boxMaterial));
    walls[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(6.5));
    walls[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(3.5));
    walls[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 1, gridMapHelper.getGlobalZPositionFromCoord(0.5));
    walls[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(1.5));
    walls[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6.5), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    walls[4].rotateY((0, $6mhZf.degreeToRadians)(90));
    walls[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(6));
    walls[7].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[8].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 1, gridMapHelper.getGlobalZPositionFromCoord(4));
    walls[9].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 1, gridMapHelper.getGlobalZPositionFromCoord(2));
    gridMapHelper.addObstacle(2, 2, 6, 7);
    gridMapHelper.addObstacle(2, 2, 3, 4);
    gridMapHelper.addObstacle(2, 2, 0, 1);
    gridMapHelper.addObstacle(4, 4, 1, 2);
    gridMapHelper.addObstacle(6, 7, 2, 2);
    gridMapHelper.addObstacle(8, 8, 1, 3);
    gridMapHelper.addObstacle(4, 4, 6, 6);
    gridMapHelper.addObstacle(6, 6, 6, 6);
    gridMapHelper.addObstacle(4, 4, 4, 4);
    gridMapHelper.addObstacle(6, 6, 4, 4);
    scene.add(walls[0]);
    scene.add(walls[1]);
    scene.add(walls[2]);
    scene.add(walls[3]);
    scene.add(walls[4]);
    scene.add(walls[5]);
    scene.add(walls[6]);
    scene.add(walls[7]);
    scene.add(walls[8]);
    scene.add(walls[9]);
    traps = [];
    const trapGeometry = new $49pUz.BoxGeometry(2, 1, 2);
    const trapMaterial = new $49pUz.MeshLambertMaterial({
        color: "rgb(255,0,0)"
    });
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps.push(new (0, $gSwgq.SpikeTrap)());
    traps[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    traps[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(7));
    traps[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(2), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(4), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(8), 0, gridMapHelper.getGlobalZPositionFromCoord(5));
    traps[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(6), 0, gridMapHelper.getGlobalZPositionFromCoord(0));
    gridMapHelper.addTrap(4, 7, traps[0]);
    gridMapHelper.addTrap(6, 7, traps[1]);
    gridMapHelper.addTrap(2, 5, traps[2]);
    gridMapHelper.addTrap(4, 5, traps[3]);
    gridMapHelper.addTrap(6, 5, traps[4]);
    gridMapHelper.addTrap(8, 5, traps[5]);
    gridMapHelper.addTrap(6, 0, traps[6]);
    scene.add(traps[0]);
    scene.add(traps[1]);
    scene.add(traps[2]);
    scene.add(traps[3]);
    scene.add(traps[4]);
    scene.add(traps[5]);
    scene.add(traps[6]);
    fires = [];
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires.push(new (0, $kLW5f.default)());
    fires[0].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[1].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[2].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(7));
    fires[3].position.set(gridMapHelper.getGlobalXPositionFromCoord(3), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[4].position.set(gridMapHelper.getGlobalXPositionFromCoord(5), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[5].position.set(gridMapHelper.getGlobalXPositionFromCoord(7), 0.1, gridMapHelper.getGlobalZPositionFromCoord(3));
    fires[6].position.set(gridMapHelper.getGlobalXPositionFromCoord(9), 0.1, gridMapHelper.getGlobalZPositionFromCoord(5));
    gridMapHelper.addFire(3, 7);
    gridMapHelper.addFire(5, 7);
    gridMapHelper.addFire(7, 7);
    gridMapHelper.addFire(3, 3);
    gridMapHelper.addFire(5, 3);
    gridMapHelper.addFire(7, 3);
    gridMapHelper.addFire(9, 5);
    fireState = 0;
    setFireStates = ()=>{
        if (fireState == 0) {
            changeFireActiveStatus(3, false);
            changeFireActiveStatus(5, false);
            changeFireActiveStatus(4, true);
            changeFireActiveStatus(6, true);
        } else {
            changeFireActiveStatus(3, true);
            changeFireActiveStatus(5, true);
            changeFireActiveStatus(4, false);
            changeFireActiveStatus(6, false);
        }
    };
    scene.add(fires[0]);
    scene.add(fires[1]);
    scene.add(fires[2]);
    scene.add(fires[3]);
    scene.add(fires[4]);
    scene.add(fires[5]);
    scene.add(fires[6]);
    coletarCristal = ()=>{
        if (sceneProperties.cancelExecution) return;
        if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[0], gridMapHelper)) {
            objectives[0].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[1], gridMapHelper)) {
            objectives[1].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else if ((0, $6mhZf.checkCollision)(actor.getObjectByName("interactionReference"), objectives[2], gridMapHelper)) {
            objectives[2].visible = false;
            consoleElement.innerText += "Cristal coletado.\n";
        } else consoleElement.innerText += "Rob\xf4 n\xe3o est\xe1 em frente ao cristal.\n";
        if (!objectives[0].visible && !objectives[1].visible && !objectives[2].visible) consoleElement.innerText += "Todos os cristais coletados com sucesso!\n";
    };
    resetLevel = ()=>{
        actor.position.set(gridMapHelper.getGlobalXPositionFromCoord(0), 1.0, gridMapHelper.getGlobalZPositionFromCoord(5));
        actor.rotation.set(0, (0, $6mhZf.degreeToRadians)(90), 0);
        actor.getObjectByName("eve").rotation.set(0, 0, 0);
        actor.getObjectByName("eve").position.y = 1.0;
        objectives[0].visible = true;
        objectives[1].visible = true;
        objectives[2].visible = true;
        gridMapHelper.restartFires();
        firesVisualRestart();
        setFireStates();
        extinguisherUses = 1;
        displayExtinguisherUses();
    };
    winCondition = ()=>{
        if (!objectives[0].visible && !objectives[1].visible && !objectives[2].visible) return true;
        else return false;
    };
    document.getElementById("winMessage").innerText = "N\xedvel Conclu\xeddo";
    document.getElementById("advanceBtn").innerText = "Finalizar";
    setFireStatesInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        fireState = (fireState + 1) % 2;
        setFireStates();
    }, 1000);
    spikeTrapState = 0;
    setSpikeTrapState = ()=>{
        if (spikeTrapState == 0) (0, $gSwgq.trapsDeactivation)(traps);
        else (0, $gSwgq.trapsActivation)(traps);
    };
    setSpikeTrapStateInterval = setInterval(()=>{
        if (sceneProperties.executing) return;
        spikeTrapState = (spikeTrapState + 1) % 2;
        setSpikeTrapState();
    }, 1000);
});
//Defining function that remove objects, scene render and button's functions
function removeObjects(crystals, walls, traps, fires) {
    if (crystals != undefined) for(let i = 0; i < crystals.length; i++)scene.remove(crystals[i]);
    if (walls != undefined) {
        for(let i1 = 0; i1 < walls.length; i1++)scene.remove(walls[i1]);
        gridMapHelper.clearObstacles();
    }
    if (traps != undefined) {
        for(let i2 = 0; i2 < traps.length; i2++)scene.remove(traps[i2]);
        gridMapHelper.clearTraps();
    }
    if (fires != undefined) {
        for(let i3 = 0; i3 < fires.length; i3++)scene.remove(fires[i3]);
        gridMapHelper.clearFires();
    }
    crystals = undefined;
    walls = undefined;
    traps = undefined;
    fires = undefined;
}
function animate() {
    if (fires) for(let i = 0; i < fires.length; i++)fires[i].update(fireClock);
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}
window.addEventListener("resize", ()=>{
    (0, $6mhZf.resizeCanvasToDisplaySize)(renderer, camera);
});
const execBtn = document.getElementById("execBtn");
execBtn.addEventListener("click", async function() {
    cancelAnimationFrame((0, $6mhZf.corrID));
    cancelAnimationFrame((0, $6mhZf.requestID));
    const codeParsed = (0, $12kOc.default)(editor.state.doc.toString());
    actor.getObjectByName("eve").position.y = 0;
    if ((0, $6mhZf.materialColor).length != 0) (0, $6mhZf.resetRobotColor)(actor);
    if (traps != null) (0, $gSwgq.trapsDeactivation)(traps);
    sceneProperties.cancelExecution = false;
    if (codeParsed != null) {
        resetLevel();
        sceneProperties.executing = true;
        this.disabled = true;
        await eval(codeParsed);
        if (winCondition()) {
            (0, $jgsti.readOnlyState).doc = editor.state.doc;
            editor.setState((0, $jgsti.readOnlyState));
            document.getElementById("winMessage").classList.remove("invisible");
            document.getElementById("advanceBtn").classList.remove("invisible");
            document.getElementById("resetBtn").disabled = true;
        } else {
            sceneProperties.executing = false;
            this.disabled = false;
        }
    }
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", ()=>{
    cancelAnimationFrame((0, $6mhZf.corrID));
    cancelAnimationFrame((0, $6mhZf.requestID));
    cancelAnimationFrame((0, $6mhZf.changColorID));
    sceneProperties.cancelExecution = true;
    actor.getObjectByName("eve").position.y = 0;
    if ((0, $6mhZf.materialColor).length != 0) (0, $6mhZf.resetRobotColor)(actor);
    resetLevel();
});
const advanceBtn = document.getElementById("advanceBtn");
advanceBtn.addEventListener("click", (e)=>{
    sceneProperties.phase++;
    if (sceneProperties.phase < phaseGeneration.length) {
        if (setFireStatesInterval) {
            clearInterval(setFireStatesInterval);
            setFireStatesInterval = undefined;
        }
        removeObjects(objectives, walls, traps, fires);
        phaseGeneration[sceneProperties.phase]();
        editor.setState((0, $jgsti.editState));
        consoleElement.innerText = null;
        document.getElementById("winMessage").classList.add("invisible");
        document.getElementById("advanceBtn").classList.add("invisible");
        execBtn.disabled = false;
        resetBtn.disabled = false;
    } else {
        sceneProperties.phase = sceneProperties.phase > phaseGeneration.length ? phaseGeneration.length : sceneProperties.phase;
        window.location.href = "../";
    }
});
//Running level 2
(0, $6mhZf.resizeCanvasToDisplaySize)(renderer, camera);
//phaseGeneration[sceneProperties.phase]();
phaseGeneration[0]();
displayExtinguisherUses();
animate();

});
parcelRequire.register("kLW5f", function(module, exports) {

$parcel$export(module.exports, "default", () => $f1f540a33eb49566$export$2e2bcd8739ae039);

var $49pUz = parcelRequire("49pUz");

var $30T0W = parcelRequire("30T0W");

var $eKab5 = parcelRequire("eKab5");


class $f1f540a33eb49566$var$FireBase extends $49pUz.Object3D {
    constructor(){
        super();
        // Load Textures
        const firePath = new URL((parcelRequire("avwHi"))).toString();
        const stonePath = new URL((parcelRequire("eYxJM"))).toString();
        let textureLoader = new $49pUz.TextureLoader();
        let fireTex = textureLoader.load(firePath);
        let cylinderTex = textureLoader.load(stonePath);
        let ringTex = textureLoader.load(stonePath);
        // Config Textures
        this.setFilters(fireTex, cylinderTex, ringTex);
        cylinderTex.repeat.set(5, 0.1);
        ringTex.repeat.set(1.3, 1.3);
        // External cylinder --------------------------------------------------------------------
        let ch = 0.15; // CylinderHeight
        const cylinderMesh1 = new $49pUz.Mesh(new $49pUz.CylinderGeometry(1, 1, ch, 32));
        const cylinderMesh2 = new $49pUz.Mesh(new $49pUz.CylinderGeometry(0.8, 0.8, ch, 32));
        const cylinderCSG1 = (0, $eKab5.CSG).fromMesh(cylinderMesh1);
        const cylinderCSG2 = (0, $eKab5.CSG).fromMesh(cylinderMesh2);
        const cylindersSubtractCSG = cylinderCSG1.subtract(cylinderCSG2);
        const cylindersSubtractMesh = (0, $eKab5.CSG).toMesh(cylindersSubtractCSG, new $49pUz.Matrix4());
        cylindersSubtractMesh.material.map = cylinderTex;
        // Cylinder top cover -------------------------------------------------------------------
        const geometry = new $49pUz.RingGeometry(0.8, 1.0, 64);
        const material = new $49pUz.MeshBasicMaterial();
        const cover = new $49pUz.Mesh(geometry, material);
        cover.rotateX(-Math.PI / 2);
        cover.position.y += ch / 2 + 0.001;
        cover.material.map = ringTex;
        // Internal cylinder --------------------------------------------------------------------      
        let ch2 = ch + 0.05; // CylinderHeight
        const cylinderMesh3 = new $49pUz.Mesh(new $49pUz.CylinderGeometry(0.8, 0.8, ch2, 32));
        const cylinderMesh4 = new $49pUz.Mesh(new $49pUz.CylinderGeometry(0.65, 0.7, ch2, 32));
        const cylinderCSG3 = (0, $eKab5.CSG).fromMesh(cylinderMesh3);
        const cylinderCSG4 = (0, $eKab5.CSG).fromMesh(cylinderMesh4);
        const cylindersSubtractCSG1 = cylinderCSG3.subtract(cylinderCSG4);
        const cylindersSubtractMesh1 = (0, $eKab5.CSG).toMesh(cylindersSubtractCSG1, new $49pUz.Matrix4());
        cylindersSubtractMesh1.material = new $49pUz.MeshLambertMaterial({
            color: "darkgray"
        });
        // The fire itself ----------------------------------------------------------------------
        this.fire = new (0, $30T0W.default)(fireTex);
        this.fire.scale.set(0.9, 3.0, 0.9);
        this.fire.position.set(0, 1.2, 0);
        this.add(this.fire);
        this.add(cover);
        this.add(cylindersSubtractMesh);
        this.add(cylindersSubtractMesh1);
        return this;
    }
    setFilters(t1, t2, t3) {
        t1.wrapS = t2.wrapS = t3.wrapS = $49pUz.RepeatWrapping;
        t1.wrapT = t2.wrapT = t3.wrapT = $49pUz.RepeatWrapping;
        t1.minFilter = t2.minFilter = t3.minFilter = $49pUz.LinearFilter;
        t1.magFilter = t2.magFilter = t3.magFilter = $49pUz.LinearFilter;
    }
    update(clock) {
        this.fire.update(clock);
    }
    setFireVisibility(visibility) {
        this.fire.visible = visibility;
    }
}
var $f1f540a33eb49566$export$2e2bcd8739ae039 = $f1f540a33eb49566$var$FireBase;

});
parcelRequire.register("30T0W", function(module, exports) {

$parcel$export(module.exports, "default", () => $231c0bd7dd64b2ae$export$2e2bcd8739ae039);

var $49pUz = parcelRequire("49pUz");

var $cVeSo = parcelRequire("cVeSo");
class $231c0bd7dd64b2ae$export$2e2bcd8739ae039 extends $49pUz.Mesh {
    constructor(fireTex){
        var fireMaterial = new $49pUz.ShaderMaterial({
            defines: (0, $cVeSo.default).defines,
            uniforms: $49pUz.UniformsUtils.clone((0, $cVeSo.default).uniforms),
            vertexShader: (0, $cVeSo.default).vertexShader,
            fragmentShader: (0, $cVeSo.default).fragmentShader,
            transparent: true,
            depthWrite: true,
            depthTest: true
        });
        // initialize uniforms 
        fireMaterial.uniforms.fireTex.value = fireTex;
        fireMaterial.uniforms.invModelMatrix.value = new $49pUz.Matrix4();
        super(new $49pUz.BoxGeometry(1.0, 1.0, 1.0), fireMaterial);
        this.setFileScale();
    }
    setFileScale(value = new $49pUz.Vector3(1.0, 2.5, 1.0)) {
        this.fireScale = value;
    }
    update(clock) {
        clock.getDelta();
        var time = clock.elapsedTime;
        var invModelMatrix = this.material.uniforms.invModelMatrix.value;
        this.updateMatrixWorld();
        invModelMatrix.copy(this.matrixWorld).invert();
        if (time !== undefined) this.material.uniforms.time.value = time;
        this.material.uniforms.invModelMatrix.value = invModelMatrix;
        this.material.uniforms.scale.value = this.fireScale;
    }
}

});
parcelRequire.register("cVeSo", function(module, exports) {

$parcel$export(module.exports, "default", () => $96865909e5316953$export$2e2bcd8739ae039);
let $96865909e5316953$var$FireShader = {
    defines: {
        "ITERATIONS": "20",
        "OCTIVES": "3"
    },
    uniforms: {
        "fireTex": {
            type: "t",
            value: null
        },
        "color": {
            type: "c",
            value: null
        },
        "time": {
            type: "f",
            value: 0.0
        },
        "invModelMatrix": {
            type: "m4",
            value: null
        },
        "scale": {
            type: "v3",
            value: null
        },
        "magnitude": {
            type: "f",
            value: 1.3
        },
        "lacunarity": {
            type: "f",
            value: 2.0
        },
        "gain": {
            type: "f",
            value: 0.5
        }
    },
    vertexShader: [
        "varying vec3 vWorldPos;",
        "void main() {",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
        "vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;",
        "}"
    ].join("\n"),
    fragmentShader: [
        "uniform vec3 color;",
        "uniform float time;",
        "uniform float seed;",
        "uniform mat4 invModelMatrix;",
        "uniform vec3 scale;",
        "uniform float magnitude;",
        "uniform float lacunarity;",
        "uniform float gain;",
        "uniform sampler2D fireTex;",
        "varying vec3 vWorldPos;",
        // GLSL simplex noise function by ashima / https://github.com/ashima/webgl-noise/blob/master/src/noise3D.glsl
        // -------- simplex noise
        "vec3 mod289(vec3 x) {",
        "return x - floor(x * (1.0 / 289.0)) * 289.0;",
        "}",
        "vec4 mod289(vec4 x) {",
        "return x - floor(x * (1.0 / 289.0)) * 289.0;",
        "}",
        "vec4 permute(vec4 x) {",
        "return mod289(((x * 34.0) + 1.0) * x);",
        "}",
        "vec4 taylorInvSqrt(vec4 r) {",
        "return 1.79284291400159 - 0.85373472095314 * r;",
        "}",
        "float snoise(vec3 v) {",
        "const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);",
        "const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);",
        // First corner
        "vec3 i  = floor(v + dot(v, C.yyy));",
        "vec3 x0 = v - i + dot(i, C.xxx);",
        // Other corners
        "vec3 g = step(x0.yzx, x0.xyz);",
        "vec3 l = 1.0 - g;",
        "vec3 i1 = min(g.xyz, l.zxy);",
        "vec3 i2 = max(g.xyz, l.zxy);",
        //   x0 = x0 - 0.0 + 0.0 * C.xxx;
        //   x1 = x0 - i1  + 1.0 * C.xxx;
        //   x2 = x0 - i2  + 2.0 * C.xxx;
        //   x3 = x0 - 1.0 + 3.0 * C.xxx;
        "vec3 x1 = x0 - i1 + C.xxx;",
        "vec3 x2 = x0 - i2 + C.yyy;",
        "vec3 x3 = x0 - D.yyy;",
        // Permutations
        "i = mod289(i); ",
        "vec4 p = permute(permute(permute( ",
        "i.z + vec4(0.0, i1.z, i2.z, 1.0))",
        "+ i.y + vec4(0.0, i1.y, i2.y, 1.0)) ",
        "+ i.x + vec4(0.0, i1.x, i2.x, 1.0));",
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
        "float n_ = 0.142857142857;",
        "vec3  ns = n_ * D.wyz - D.xzx;",
        "vec4 j = p - 49.0 * floor(p * ns.z * ns.z);",
        "vec4 x_ = floor(j * ns.z);",
        "vec4 y_ = floor(j - 7.0 * x_);",
        "vec4 x = x_ * ns.x + ns.yyyy;",
        "vec4 y = y_ * ns.x + ns.yyyy;",
        "vec4 h = 1.0 - abs(x) - abs(y);",
        "vec4 b0 = vec4(x.xy, y.xy);",
        "vec4 b1 = vec4(x.zw, y.zw);",
        //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
        //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
        "vec4 s0 = floor(b0) * 2.0 + 1.0;",
        "vec4 s1 = floor(b1) * 2.0 + 1.0;",
        "vec4 sh = -step(h, vec4(0.0));",
        "vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;",
        "vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;",
        "vec3 p0 = vec3(a0.xy, h.x);",
        "vec3 p1 = vec3(a0.zw, h.y);",
        "vec3 p2 = vec3(a1.xy, h.z);",
        "vec3 p3 = vec3(a1.zw, h.w);",
        //Normalise gradients
        "vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));",
        "p0 *= norm.x;",
        "p1 *= norm.y;",
        "p2 *= norm.z;",
        "p3 *= norm.w;",
        // Mix final noise value
        "vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);",
        "m = m * m;",
        "return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));",
        "}",
        // simplex noise --------
        "float turbulence(vec3 p) {",
        "float sum = 0.0;",
        "float freq = 1.0;",
        "float amp = 1.0;",
        "for(int i = 0; i < OCTIVES; i++) {",
        "sum += abs(snoise(p * freq)) * amp;",
        "freq *= lacunarity;",
        "amp *= gain;",
        "}",
        "return sum;",
        "}",
        "vec4 samplerFire (vec3 p, vec4 scale) {",
        "vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);",
        "if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);",
        "p.y -= (seed + time) * scale.w;",
        "p *= scale.xyz;",
        "st.y += sqrt(st.y) * magnitude * turbulence(p);",
        "if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);",
        "return texture2D(fireTex, st);",
        "}",
        "vec3 localize(vec3 p) {",
        "return (invModelMatrix * vec4(p, 1.0)).xyz;",
        "}",
        "void main() {",
        "vec3 rayPos = vWorldPos;",
        "vec3 rayDir = normalize(rayPos - cameraPosition);",
        "float rayLen = 0.0288 * length(scale.xyz);",
        "vec4 col = vec4(0.0);",
        "vec4 noiseScale = vec4(1, 2, 1, 0.3);",
        "for(int i = 0; i < ITERATIONS; i++) {",
        "rayPos += rayDir * rayLen;",
        "vec3 lp = localize(rayPos);",
        "lp.y += 0.5;",
        "lp.xz *= 2.0;",
        "col += samplerFire(lp, noiseScale);",
        "}",
        "col.a = col.r;",
        "gl_FragColor = col;",
        "}"
    ].join("\n")
};
var $96865909e5316953$export$2e2bcd8739ae039 = $96865909e5316953$var$FireShader;

});


parcelRequire.register("avwHi", function(module, exports) {

module.exports = new URL("../" + (parcelRequire("2JpsI")).resolve("GGIiK"), import.meta.url).toString();

});

parcelRequire.register("eYxJM", function(module, exports) {

module.exports = new URL("../" + (parcelRequire("2JpsI")).resolve("2x2Z6"), import.meta.url).toString();

});


parcelRequire.register("12kOc", function(module, exports) {

$parcel$export(module.exports, "default", () => $0c161e84c454184c$export$2e2bcd8739ae039);
const $0c161e84c454184c$var$functionFilter = [
    {
        filter: new RegExp("^andarFrente(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^andarTras(\\s+)?\\((\\s+)?(0|[1-9][0-9]*)(\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "sequential"
    },
    {
        filter: new RegExp("^coletarCristal(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "normal"
    },
    {
        filter: new RegExp("^apagarFogo(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        type: "mustCondition"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$"),
        type: "conditional"
    },
    {
        filter: new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$"),
        type: "conditional&&blockValidation"
    },
    {
        filter: new RegExp("^}$"),
        type: "closeBlockValidation"
    },
    {
        filter: new RegExp("^{$"),
        type: "blockValidation"
    }
];
const $0c161e84c454184c$var$conditionalParameters = [
    new RegExp("true"),
    new RegExp("false"),
    new RegExp("^pegandoFogo(\\s+)?\\((\\s+)?\\)(\\s+)?$")
];
function $0c161e84c454184c$var$ifValidation(line) {
    let trimLine = line.trim();
    let condition = line.substring(trimLine.indexOf("(") + 1, trimLine.lastIndexOf(")"));
    for(let i = 0; i < $0c161e84c454184c$var$conditionalParameters.length; i++){
        if ($0c161e84c454184c$var$conditionalParameters[i].test(condition.trim())) return true;
        else continue;
    }
    return false;
}
function $0c161e84c454184c$var$blockValidation(lines, index) {
    let valid = false;
    let ignoreClosure = 0;
    for(let i = index + 1; i < lines.length; i++){
        if (lines[i].includes("}")) {
            if (ignoreClosure == 0) {
                valid = true;
                break;
            } else ignoreClosure--;
        } else if (lines[i].includes("{")) ignoreClosure++;
        else continue;
    }
    return valid;
}
function $0c161e84c454184c$var$closeBlockValidation(lines, index) {
    let valid = false;
    for(let i = index - 1; i >= 0; i--){
        if (lines[i].includes("{")) {
            valid = true;
            break;
        } else continue;
    }
    return valid;
}
function $0c161e84c454184c$var$mustConditionValidation(lines, index) {
    let valid = false;
    let completeCommonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?(\\s+)?$");
    let commonIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)$");
    let completeblockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{[^}]*?$");
    let blockIf = new RegExp("^se(\\s+)?\\((\\s+)?.+\\)(\\s+)?{$");
    let start = null;
    for(let i = index - 1; i >= 0; i--){
        if (commonIf.test(lines[i].trim()) || blockIf.test(lines[i].trim())) {
            start = i;
            break;
        } else continue;
    }
    if (start != null) {
        let codeTillFunction = "";
        for(let i1 = start; i1 < index; i1++)codeTillFunction += `${lines[i1].trim()}\n`;
        if (completeCommonIf.test(codeTillFunction.trim()) || completeblockIf.test(codeTillFunction.trim())) {
            valid = true;
            return valid;
        } else return valid;
    } else return valid;
}
function $0c161e84c454184c$var$predictFunction(lines, index) {
    const directionFilter = [
        new RegExp("^andarFrente(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^andarTras(\\s+)?\\((\\s+)?\\d+(\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarEsquerda(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^girarDireita(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$"),
        new RegExp("^darMeiaVolta(\\s+)?\\((\\s+)?\\)(\\s+)?(;)?$")
    ];
    let position = [
        0,
        5
    ];
    let axis = 0;
    let value = "+";
    let direction = 0;
    function calcDirection(direction) {
        const dirGuide = [
            {
                axis: 0,
                value: "+"
            },
            {
                axis: 1,
                value: "+"
            },
            {
                axis: 0,
                value: "-"
            },
            {
                axis: 1,
                value: "-"
            }
        ];
        return dirGuide[direction];
    }
    function correctRotation(index) {
        let i = index;
        if (i > 3) return 0;
        else if (i < 0) return 3;
        else return i;
    }
    for(let i = 0; i < index; i++){
        if (directionFilter[0].test(lines[i])) {
            let amount = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "+") position[axis] += amount;
            else position[axis] -= amount;
        } else if (directionFilter[1].test(lines[i])) {
            let amount1 = parseInt(lines[i].substring(lines[i].indexOf("(") + 1, lines[i].indexOf(")")));
            if (value == "-") position[axis] += amount1;
            else position[axis] -= amount1;
        } else if (directionFilter[2].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            const obj = calcDirection(direction);
            axis = obj.axis;
            value = obj.value;
        } else if (directionFilter[3].test(lines[i])) {
            direction++;
            direction = correctRotation(direction);
            const obj1 = calcDirection(direction);
            axis = obj1.axis;
            value = obj1.value;
        } else if (directionFilter[4].test(lines[i])) {
            direction--;
            direction = correctRotation(direction);
            direction--;
            direction = correctRotation(direction);
            const obj2 = calcDirection(direction);
            axis = obj2.axis;
            value = obj2.value;
        } else continue;
    }
    if (value == "+") position[axis]++;
    else position[axis]--;
    return position;
}
function $0c161e84c454184c$var$printError(text, line) {
    const consoleElement = document.getElementById("consoleArea");
    consoleElement.innerText += `Código inválido: ${text} linha: ${line}\n`;
}
function $0c161e84c454184c$export$2e2bcd8739ae039(code, limit = 0) {
    let codeParsed = "async function runCode(){\n";
    let badLuckFunctions = "\n";
    let lines = code.split("\n");
    let valid = true;
    let totalCommands = 0;
    for(let i = 0; i < lines.length; i++){
        let validLine = false;
        let lineType;
        if (lines[i].trim() != "") {
            for(let j = 0; j < $0c161e84c454184c$var$functionFilter.length; j++){
                validLine = $0c161e84c454184c$var$functionFilter[j].filter.test(lines[i].trim());
                if (validLine) {
                    lineType = $0c161e84c454184c$var$functionFilter[j].type;
                    break;
                } else continue;
            }
            if (validLine) {
                if (lineType === "sequential") {
                    let lineParsed = `await ${lines[i].trim()}\n`;
                    codeParsed += lineParsed;
                    totalCommands++;
                } else if (lineType === "conditional&&blockValidation") {
                    let validConditional = false;
                    if ($0c161e84c454184c$var$blockValidation(lines, i)) {
                        if ($0c161e84c454184c$var$ifValidation(lines[i])) validConditional = true;
                        else $0c161e84c454184c$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                    } else $0c161e84c454184c$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                    if (validConditional) {
                        let line = lines[i].trim();
                        let lineParsed1 = `if${line.substring(line.indexOf("("))}\n`;
                        codeParsed += lineParsed1;
                        totalCommands++;
                    } else {
                        valid = false;
                        break;
                    }
                } else if (lineType === "conditional") {
                    if ($0c161e84c454184c$var$ifValidation(lines[i])) {
                        let line1 = lines[i].trim();
                        let lineParsed2 = `if${line1.substring(line1.indexOf("("))}\n`;
                        codeParsed += lineParsed2;
                        totalCommands++;
                    } else {
                        $0c161e84c454184c$var$printError(`${lines[i]} (Condição inválida)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "blockValidation") {
                    if ($0c161e84c454184c$var$blockValidation(lines, i)) {
                        let lineParsed3 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed3;
                        totalCommands++;
                    } else {
                        $0c161e84c454184c$var$printError(`${lines[i]} (Bloco é aberto mas nunca é fechado)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "closeBlockValidation") {
                    if ($0c161e84c454184c$var$closeBlockValidation(lines, i)) {
                        let lineParsed4 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed4;
                        totalCommands++;
                    } else {
                        $0c161e84c454184c$var$printError(`${lines[i]} (Bloco é fechado mas nunca é aberto)`, i + 1);
                        valid = false;
                        break;
                    }
                } else if (lineType === "mustCondition") {
                    if ($0c161e84c454184c$var$mustConditionValidation(lines, i)) {
                        let lineParsed5 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed5;
                        totalCommands++;
                    } else {
                        let pos = $0c161e84c454184c$var$predictFunction(lines, i);
                        badLuckFunctions += `badLuck([${pos[0]},${pos[1]}])\n`;
                        let lineParsed6 = `${lines[i].trim()}\n`;
                        codeParsed += lineParsed6;
                        totalCommands++;
                    }
                } else {
                    let lineParsed7 = `${lines[i].trim()}\n`;
                    codeParsed += lineParsed7;
                    totalCommands++;
                }
            } else {
                $0c161e84c454184c$var$printError(lines[i], i + 1);
                valid = false;
                break;
            }
            if (limit > 0 && totalCommands > limit) {
                document.getElementById("consoleArea").innerText += `Aviso: O código tem mais linhas do que o robô pode processar. Tente rescrever seu código em ${limit} linhas ou menos.\n`;
                valid = false;
                break;
            }
        } else continue;
    }
    if (valid) {
        codeParsed += `}${badLuckFunctions}runCode()\n`;
        return codeParsed;
    } else return null;
}

});


var $d21c16c062c075c9$exports = {};

(parcelRequire("2JpsI")).register(JSON.parse('{"gktNi":"index.ff37b465.js","GGIiK":"fire.e088cc30.png","2x2Z6":"stone.543880d2.jpg","2d87f":"index.424a01d9.js","c5VSK":"index.8c12255d.js"}'));


parcelRequire("apYFO");

