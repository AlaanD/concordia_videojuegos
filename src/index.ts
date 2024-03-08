import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application<HTMLCanvasElement>({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

// Añade los activos para cargar
Assets.add('myClampy', 'clampy.png');

// Carga los activos y obtén una promesa resuelta una vez que se cargue
const texturesPromise = Assets.load(['myClampy']);

// Cuando la promesa se resuelva, ¡tendrás la textura!
texturesPromise.then((textures) => {
  const clampy = Sprite.from(textures.myClampy);
  clampy.anchor.set(0.5);
  clampy.x = app.screen.width / 2;
  clampy.y = app.screen.height / 2;

  app.stage.addChild(clampy);

  console.log("Hola mundo!", clampy.width, clampy.height);
});