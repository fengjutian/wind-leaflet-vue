<template>
  <div class="hello">
   <div id="map" style="position:absolute; top:0; bottom:0; width:100%;"></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas: require('./gl.json'),
      map: {}
    }
  },
  mounted() {
      this.init();
      this.mapInit()
  },
  methods: {
    init() {
           //风场样式引用
      var Esri_DarkGreyCanvas = L.tileLayer(
          `http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=a3db440b1e1b8f00eeeae7961e75caff`
      );
      //生成风场实例
      var velocityLayer = L.velocityLayer({
              displayValues: true,
              displayOptions: {
                  velocityType: 'GBR Wind',
                  displayPosition: 'bottomleft',
                  displayEmptyString: 'No wind data'
              },
              data: this.datas,//风场数据
              minVelocity: 0, //Velocity：速率
              maxVelocity: 10,
              velocityScale: 0.005,
              particleMultiplier: 1 / 1200,//粒子的数量
              lineWidth: 5,                     //粒子的粗细
              frameRate: 15,                      //定义每秒执行的次数
           //   colorScale: ["rgb(47,112,47)","rgb(4,112,47)","rgb(47,112,47)","rgb(47,112,47)","rgb(47,112,47)"]
              colorScale: ['red', 'green', 'gray']
          });
      //添加风场样式至地图中
      this.map = L.map('map', {
        center: [118.785650,32.050660],
        zoom: 12,
        maxZoom: 20,
        tileSize: 256,
        zoomOffset: 1,
        zoomControl: true,
        layers: [Esri_DarkGreyCanvas],
      })
      // 风场实例添加到地图上
      velocityLayer.addTo(this.map)


        

    },
    mapInit() {
       var map = L.map('map', {
        crs: L.CRS.EPSG4326
        }).setView([30, 120], 10);

        L.tileLayer('http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=a3db440b1e1b8f00eeeae7961e75caff', {
        maxZoom: 20,
        tileSize: 256,
        zoomOffset: 1
        }).addTo(map );
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
