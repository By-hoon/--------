var areas = [
    {
        name : '동구',
        path : [
            new kakao.maps.LatLng(36.301324583250285,127.45550790557547),
            new kakao.maps.LatLng(36.294176140224074,127.45752208509549),
            new kakao.maps.LatLng(36.293854129057266,127.45086053691463),
            new kakao.maps.LatLng(36.29668784934185, 127.44121734545878),
            new kakao.maps.LatLng(36.292727383658594,127.43778035275533),
            new kakao.maps.LatLng(36.28860816344094,127.42731037062407),
            new kakao.maps.LatLng(36.28158725000572,127.43535260925421),
            new kakao.maps.LatLng(36.27926092671488,127.43228050479614),
            new kakao.maps.LatLng(36.27018769140737,127.43950824058889),
            new kakao.maps.LatLng(36.26160679538318,127.430411644886),
            new kakao.maps.LatLng(36.25397246355769,127.43351803827602),
            new kakao.maps.LatLng(36.244750245982246,127.44033607060352),
            new kakao.maps.LatLng(36.238193127316684,127.44229536632001),
            new kakao.maps.LatLng(36.22764949271163,127.43382141978921),
            new kakao.maps.LatLng(36.22526794736204,127.4256831686333),
            new kakao.maps.LatLng(36.211616972252386,127.42614812659907),
            new kakao.maps.LatLng(36.19857568887705,127.43353034690112),
            new kakao.maps.LatLng(36.196722887378236,127.44871613365761),
            new kakao.maps.LatLng(36.20108584201093,127.45587521297026),
            new kakao.maps.LatLng(36.20658590785425,127.44540922125437),
            new kakao.maps.LatLng(36.21291880405588,127.46028364687875),
            new kakao.maps.LatLng(36.21455652891787,127.46891699718796),
            new kakao.maps.LatLng(36.22234681508515,127.46730232934264),
            new kakao.maps.LatLng(36.233482076023535,127.48996984592351),
            new kakao.maps.LatLng(36.25143928745318,127.48760757608358),
            new kakao.maps.LatLng(36.25733542347477,127.48998373313776),
            new kakao.maps.LatLng(36.259216362378076,127.48631370802161),
            new kakao.maps.LatLng(36.272710596042955,127.48875320344399),
            new kakao.maps.LatLng(36.28308408029012,127.49898657567441),
            new kakao.maps.LatLng(36.29615527254995,127.4918412516385),
            new kakao.maps.LatLng(36.305672867289466,127.49897656677663),
            new kakao.maps.LatLng(36.31296048245644,127.49579565722668),
            new kakao.maps.LatLng(36.3194458774758,127.49686650011603),
            new kakao.maps.LatLng(36.32561572716036,127.50295937869845),
            new kakao.maps.LatLng(36.34006989542128,127.50134153132878),
            new kakao.maps.LatLng(36.35035287086857,127.51936875600019),
            new kakao.maps.LatLng(36.354324831434425,127.522395241173),
            new kakao.maps.LatLng(36.37006756002004,127.52657799826208),
            new kakao.maps.LatLng(36.38380225154939,127.52480439828078),
            new kakao.maps.LatLng(36.38765861525519,127.52679952090622),
            new kakao.maps.LatLng(36.39719164150671,127.53915849858969),
            new kakao.maps.LatLng(36.39518677845375,127.55507996685495),
            new kakao.maps.LatLng(36.40711823114283,127.5501006544752),
            new kakao.maps.LatLng(36.41207819618623,127.54288955777092),
            new kakao.maps.LatLng(36.41927919296164,127.54228045721084),
            new kakao.maps.LatLng(36.41921976538919,127.52938085463471),
            new kakao.maps.LatLng(36.423129800595156,127.52480369675115),
            new kakao.maps.LatLng(36.419846993974524,127.51991306824664),
            new kakao.maps.LatLng(36.42247352376815,127.51451260809546),
            new kakao.maps.LatLng(36.4103062946867,127.5110170599843),
            new kakao.maps.LatLng(36.40865381371693,127.50155457478037),
            new kakao.maps.LatLng(36.43242793883955,127.48992221083346),
            new kakao.maps.LatLng(36.43937313196882,127.4924296582595),
            new kakao.maps.LatLng(36.43863450365681,127.48774378401005),
            new kakao.maps.LatLng(36.429535572134384,127.48101614336723),
            new kakao.maps.LatLng(36.42906618925311,127.48093066891701),
            new kakao.maps.LatLng(36.41910428775569,127.4758343158973),
            new kakao.maps.LatLng(36.40695800602346,127.4641618712625),
            new kakao.maps.LatLng(36.406590409043396,127.4628029261374),
            new kakao.maps.LatLng(36.40026888031765,127.45535273501841),
            new kakao.maps.LatLng(36.38886861560616,127.45528942956608),
            new kakao.maps.LatLng(36.37917925371437,127.45184281017696),
            new kakao.maps.LatLng(36.36081523372763,127.46611242482787),
            new kakao.maps.LatLng(36.350901208951534,127.46468099061941),
            new kakao.maps.LatLng(36.354450068422665,127.45463141158275),
            new kakao.maps.LatLng(36.35234071712992,127.44138179978111),
            new kakao.maps.LatLng(36.35996646002097,127.43826031093013),
            new kakao.maps.LatLng(36.359109781185005,127.4324438402601),
            new kakao.maps.LatLng(36.35566127834632,127.42910571248237),
            new kakao.maps.LatLng(36.35546388764971,127.427475598489),
            new kakao.maps.LatLng(36.355021417731784,127.4275455925133),
            new kakao.maps.LatLng(36.34853736857885,127.42425702869816),
            new kakao.maps.LatLng(36.34740515624001,127.41924564583286),
            new kakao.maps.LatLng(36.346357276239054,127.41843851446092),
            new kakao.maps.LatLng(36.34432000350359,127.42183473893067),
            new kakao.maps.LatLng(36.344223848577315,127.42210887480717),
            new kakao.maps.LatLng(36.340927031580165,127.41499183717445),
            new kakao.maps.LatLng(36.33885082348576,127.41980719337951),
            new kakao.maps.LatLng(36.33005748897101,127.42908702525698),
            new kakao.maps.LatLng(36.31988867403854,127.43702793101701),
            new kakao.maps.LatLng(36.31235131449649,127.44046564215228),
            new kakao.maps.LatLng(36.31081536098794,127.4461871858021),
            new kakao.maps.LatLng(36.3016143323538,127.4548376238397),
            new kakao.maps.LatLng(36.301324583250285,127.45550790557547)
        ]
    }, {
        name : '중구',
        path : [
            new kakao.maps.LatLng(36.3016143323538,127.4548376238397),
            new kakao.maps.LatLng(36.31081536197707,127.44618718723216),
            new kakao.maps.LatLng(36.3123513156441,127.44046564358317),
            new kakao.maps.LatLng(36.31988867518618, 127.43702793244802),
            new kakao.maps.LatLng(36.33005749006605,127.42908702665515),
            new kakao.maps.LatLng(36.33885082458135,127.41980719464716),
            new kakao.maps.LatLng(36.340056418076365,127.41592707204416),
            new kakao.maps.LatLng(36.347756894350155,127.40995929769475),
            new kakao.maps.LatLng(36.34963132523982,127.40390014093737),
            new kakao.maps.LatLng(36.33835721067265,127.40287256328651),
            new kakao.maps.LatLng(36.328232127894104,127.38926918391496),
            new kakao.maps.LatLng(36.31842014759796,127.3841700138765),
            new kakao.maps.LatLng(36.310551337123975,127.38641084556798),
            new kakao.maps.LatLng(36.304967155397215,127.38023596684211),
            new kakao.maps.LatLng(36.298611979737124,127.38216028117155),
            new kakao.maps.LatLng(36.292964780519526,127.37831122574728),
            new kakao.maps.LatLng(36.293287386244245,127.37331288079203),
            new kakao.maps.LatLng(36.28446999832085,127.36809082784978),
            new kakao.maps.LatLng(36.27946404868116,127.37153100184543),
            new kakao.maps.LatLng(36.272178516281954,127.37246016170023),
            new kakao.maps.LatLng(36.26869284740429,127.38286705921946),
            new kakao.maps.LatLng(36.26227094591341,127.39025770124618),
            new kakao.maps.LatLng(36.25067221139008,127.38641214535288),
            new kakao.maps.LatLng(36.23952471211416,127.39036978013613),
            new kakao.maps.LatLng(36.234152459806644,127.3873428967394),
            new kakao.maps.LatLng(36.23287669343595,127.40091017720718),
            new kakao.maps.LatLng(36.22243347478976,127.40457029004551),
            new kakao.maps.LatLng(36.216811425840795,127.41064061533343),
            new kakao.maps.LatLng(36.21289294125739,127.40799902177103),
            new kakao.maps.LatLng(36.20712691030929,127.41955912368437),
            new kakao.maps.LatLng(36.21161697334752,127.42614812799509),
            new kakao.maps.LatLng(36.225267948404834,127.42568316989889),
            new kakao.maps.LatLng(36.22764949375375,127.43382142121789),
            new kakao.maps.LatLng(36.23819312841224,127.44229536755375),
            new kakao.maps.LatLng(36.24475024697206,127.44033607186932),
            new kakao.maps.LatLng(36.25397246470621,127.43351803947756),
            new kakao.maps.LatLng(36.261606796372874,127.43041164621715),
            new kakao.maps.LatLng(36.27018769255548,127.43950824188859),
            new kakao.maps.LatLng(36.27926092736538,127.43228050622356),
            new kakao.maps.LatLng(36.28158725065676,127.43535261051869),
            new kakao.maps.LatLng(36.288608164091826,127.42731037195382),
            new kakao.maps.LatLng(36.2927273847029,127.43778035357103),
            new kakao.maps.LatLng(36.296687850384565,127.44121734669315),
            new kakao.maps.LatLng(36.29385413015182,127.45086053837768),
            new kakao.maps.LatLng(36.29417614137199,127.45752208639585),
            new kakao.maps.LatLng(36.301324583250285,127.45550790557547),
            new kakao.maps.LatLng(36.3016143323538,127.4548376238397)
        ]
    }, {
        name : '서구',
        path : [
            new kakao.maps.LatLng(36.264241880804036,127.29193521755344),
            new kakao.maps.LatLng(36.25989298462627,127.28455045527032),
            new kakao.maps.LatLng(36.253108740865315,127.27914510247618),
            new kakao.maps.LatLng(36.235293589512786, 127.28315451331028),
            new kakao.maps.LatLng(36.23461949077442,127.28727070710318),
            new kakao.maps.LatLng(36.22896091576824,127.29297154177046),
            new kakao.maps.LatLng(36.223123400865134,127.29356769955344),
            new kakao.maps.LatLng(36.22135874580276,127.30109454798944),
            new kakao.maps.LatLng(36.22615997838988,127.30638950489063),
            new kakao.maps.LatLng(36.22081537038068,127.31564078187083),
            new kakao.maps.LatLng(36.21294808861717,127.32155008842592),
            new kakao.maps.LatLng(36.20315837321138,127.32394555580422),
            new kakao.maps.LatLng(36.2015134053354,127.33200125018341),
            new kakao.maps.LatLng(36.18405558447333,127.33169756735201),
            new kakao.maps.LatLng(36.18337220768327,127.3355116844785),
            new kakao.maps.LatLng(36.18891001470243,127.34073170652998),
            new kakao.maps.LatLng(36.20412685032684,127.34686670714854),
            new kakao.maps.LatLng(36.211839056829994,127.35296741550728),
            new kakao.maps.LatLng(36.213918268483816,127.35943066760406),
            new kakao.maps.LatLng(36.21890129288429,127.36419690096946),
            new kakao.maps.LatLng(36.226680166467304,127.36011116000584),
            new kakao.maps.LatLng(36.23230324798855,127.3634021092213),
            new kakao.maps.LatLng(36.251559579737034,127.36415654972085),
            new kakao.maps.LatLng(36.25380950979577,127.36002230408874),
            new kakao.maps.LatLng(36.26258634170532,127.35950167065728),
            new kakao.maps.LatLng(36.2694007580897,127.36406010321558),
            new kakao.maps.LatLng(36.26989415766277,127.37123318451914),
            new kakao.maps.LatLng(36.27457943815569,127.37305442636725),
            new kakao.maps.LatLng(36.28447000169945,127.36809082625449),
            new kakao.maps.LatLng(36.29328738994388,127.37331287908444),
            new kakao.maps.LatLng(36.292964783716194,127.37831122439002),
            new kakao.maps.LatLng(36.29861198289143,127.38216027987063),
            new kakao.maps.LatLng(36.30496715838268,127.38023596585303),
            new kakao.maps.LatLng(36.31055134014321,127.38641084373344),
            new kakao.maps.LatLng(36.31842015093163,127.384170012329),
            new kakao.maps.LatLng(36.32823213082465,127.38926918207329),
            new kakao.maps.LatLng(36.3383572141028,127.40287256150036),
            new kakao.maps.LatLng(36.35326965111834,127.4046108005364),
            new kakao.maps.LatLng(36.361368159659776,127.40113905208933),
            new kakao.maps.LatLng(36.37140522668152,127.39291674253677),
            new kakao.maps.LatLng(36.37140611891007,127.39291444150585),
            new kakao.maps.LatLng(36.371497608118,127.3926785370132),
            new kakao.maps.LatLng(36.37128945194132,127.38779664922679),
            new kakao.maps.LatLng(36.37131855763953,127.38752666877193),
            new kakao.maps.LatLng(36.3719612018899,127.37710113705415),
            new kakao.maps.LatLng(36.37187753834619,127.37638389499398),
            new kakao.maps.LatLng(36.36412943976258,127.36560426970215),
            new kakao.maps.LatLng(36.36398276152716,127.36519437708951),
            new kakao.maps.LatLng(36.35870193006992,127.35850356472606),
            new kakao.maps.LatLng(36.357996458435615,127.3582594325735),
            new kakao.maps.LatLng(36.35343050146544,127.35067437086076),
            new kakao.maps.LatLng(36.34973188211183,127.34909605554134),
            new kakao.maps.LatLng(36.334992576301886,127.35457428033456),
            new kakao.maps.LatLng(36.332154063339374,127.35375315199677),
            new kakao.maps.LatLng(36.33220678383515,127.33814256551372),
            new kakao.maps.LatLng(36.32904444253383,127.33590314807734),
            new kakao.maps.LatLng(36.3287558663841,127.33590160267246),
            new kakao.maps.LatLng(36.3134533345994,127.33748207424227),
            new kakao.maps.LatLng(36.307891661527734,127.33260694413502),
            new kakao.maps.LatLng(36.30159746824275,127.33248324316845)
        ]
    }, {
        name : '유성구',
        path : [
        ]
    },{
        name : '중구',
        path : [
        ]
    }
];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(36.33929480377198, 127.39343696623958), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption),
    customOverlay = new kakao.maps.CustomOverlay({}),
    infowindow = new kakao.maps.InfoWindow({removable: true});

// 지도에 영역데이터를 폴리곤으로 표시합니다 
for (var i = 0, len = areas.length; i < len; i++) {
    displayArea(areas[i]);
}

// 다각형을 생상하고 이벤트를 등록하는 함수입니다
function displayArea(area) {

    // 다각형을 생성합니다 
    var polygon = new kakao.maps.Polygon({
        map: map, // 다각형을 표시할 지도 객체
        path: area.path,
        strokeWeight: 2,
        strokeColor: '#004c80',
        strokeOpacity: 0.8,
        fillColor: '#fff',
        fillOpacity: 0.7 
    });

    // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
    // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
    kakao.maps.event.addListener(polygon, 'mouseover', function() {
        polygon.setOptions({fillColor: '#09f'});
        customOverlay.setMap(map);
    });

    // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
    // 커스텀 오버레이를 지도에서 제거합니다 
    kakao.maps.event.addListener(polygon, 'mouseout', function() {
        polygon.setOptions({fillColor: '#fff'});
        customOverlay.setMap(null);
    }); 
}

//----마커 추가 부분----------------------------------------------------------
const stopBtn = document.querySelector(".stopBtn");
let markerLat = [];

const MARKERLAT_LS = 'markerLat'
const STOPBTN_LS = 'stop';

//불러온 값으로 마커 출력
function printMarker(lat, lng){
    var imageSrc = 'KakaoTalk_20200623_145500408.jpg', 
    imageSize = new kakao.maps.Size(20, 20), 
    imageOption = {offset: new kakao.maps.Point(10 , 20)}; 

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(lat, lng);
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage 
});
marker.setMap(map);  
}

//배열에 저장된 값 불러오기
function loadMarkers(){
    const loadMarkerLat = localStorage.getItem(MARKERLAT_LS);
    if(loadMarkerLat !== null){
        const parsedMarker = JSON.parse(loadMarkerLat);
        parsedMarker.forEach(function(markerIn){
            printMarker(markerIn.lat, markerIn.lng);
        });
    }
}   

//클릭 이벤트 마커 추가 부분
function makeMarker(mouseEvent){
    var latlng = mouseEvent.latLng; 
    var imageSrc = 'KakaoTalk_20200623_145500408.JPG', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(20, 20), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(10 , 20)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

//찍은 마커 정보 배열에 저장
const markerLatobj = {
    lat : latlng.getLat(),
    lng : latlng.getLng()
} ;
 markerLat.push(markerLatobj);
 saveMarkerLat();
}

function addMarker(){
    kakao.maps.event.addListener(map, 'click', makeMarker);
    stopBtn.classList.remove(STOPBTN_LS);
}

function stopAdd(){
    kakao.maps.event.removeListener(map, 'click', makeMarker);
    stopBtn.classList.add(STOPBTN_LS);
}

function saveMarkerLat(){
    localStorage.setItem(MARKERLAT_LS, JSON.stringify(markerLat));
}

function init(){
    loadMarkers();
}

init();