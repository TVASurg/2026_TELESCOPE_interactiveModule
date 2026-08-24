/*
skin id = 806 (756 for mastoidectomy) ()
bone id = 171
tympanic membrane id = 111
malleus id = 156
incus id = 141
stapes id = 126
tensor tympanii id = 81
stapedius id = 96
facial nerve id = 66
IAM id = 36
cochlea id = 51
jugular id = 6
carotid id = 21
*/
function initSketchFabViewer (modelID, modelSet){
var iframe = document.getElementById( 'api-frame' );
    //var uid = '167ba957be6a4cf292beb8f573e6546f';
    var uid = modelID;

    // By default, the latest version of the viewer API will be used.
    var client = new Sketchfab( iframe );

    // Alternatively, you can request a specific version.
    // var client = new Sketchfab( '1.12.1', iframe );

    client.init( uid, {
        
        success: function onSuccess( api ){
            api.start();
            api.addEventListener( 'viewerready', function() {
            api.setAnnotationCameraTransition(true, true); 
                // API is ready to use
                // Insert your code here
                // Define your coordinates: [X, Y, Z]

            
            //var cameraPosition = [0, 0, 0]; 
            //var targetPosition = [1, 1, 1];    
            //var duration = 2; // 0 means an instant snap, omitting or adding >0 creates an animation
            // Instantly apply the initial camera position
            // api.setCameraLookAt(cameraPosition, targetPosition, duration, function(err) {
            //     if (!err) {
            //         console.log('Initial camera view successfully set.');
            //     }
            // });

            //var defaultCam01 =[0.15748772605428382, -0.028781214292721978, 0.034736395685742124];  
            //var defaultCamTarget01 =[0.018636344223989465, -0.01853447255288862, 0.0425367004067346];  
            //api.setCameraLookAt(defaultCam01, defaultCamTarget01);

            //init - hide all annotations
            for (i=0; i<21; i++)
            {
                api.hideAnnotation(i);
            }
            //only visible ones should be tympanic membrane/malleus
            api.showAnnotation(0);
            api.showAnnotation(1);
            api.showAnnotation(11);
            api.showAnnotation(12);


                
                api.getSceneGraph(function (err, result) {
                if (err) {
                //console.log('Error getting nodes');
                return;
                }
                // get the id from that log
                //console.log(result);
               
            });
                var skinGroupID = 0;
                if(modelSet == "normal")
                {
                    skinGroupID = 806;
                }
                else if(modelSet == "mastoidectomy")
                {
                    skinGroupID = 756;
                }
                else if(modelSet == "atticotomy")
                {
                    skinGroupID = 796;
                    api.hide(skinGroupID);
                }
                document.getElementById('btn_radio_skin_01').addEventListener('click', function () {
                api.show(skinGroupID);
                });
                document.getElementById('btn_radio_skin_02').addEventListener('click', function () {
                api.hide(skinGroupID);
                });

                document.getElementById('btn_radio_bone_01').addEventListener('click', function () {
                                api.getMaterialList(function (err, materials) {
                api.show(171);
                for (var i = 0; i < materials.length; i++) {

                if (materials[i].name=="bone")
                {
                    materials[i].channels.Opacity.enable = false;
                    materials[i].channels.Opacity.factor = 1;
                    api.setMaterial(materials[i]);

                }
                
               
                }
                //for annotations
                api.showAnnotation(2);
                api.showAnnotation(3);
                api.showAnnotation(4);
                api.showAnnotation(6);
                api.showAnnotation(7);
                api.showAnnotation(8);
                api.showAnnotation(9);
                api.showAnnotation(10);
                });
                });
                document.getElementById('btn_radio_bone_02').addEventListener('click', function () {
                                api.getMaterialList(function (err, materials) {
                api.show(171);
                for (var i = 0; i < materials.length; i++) {

                if (materials[i].name=="bone")
                {
                    materials[i].channels.Opacity.enable = true;
                    materials[i].channels.Opacity.factor = 0.55;
                    api.setMaterial(materials[i]);

                }
                
                }
                //for annotations
                api.showAnnotation(2);
                api.showAnnotation(3);
                api.showAnnotation(4);
                api.showAnnotation(6);
                api.showAnnotation(7);
                api.showAnnotation(8);
                api.showAnnotation(9);
                api.showAnnotation(10);
                });
                });

                document.getElementById('btn_radio_bone_03').addEventListener('click', function () {
                api.hide(171);
                //for annotations
                api.hideAnnotation(2);
                api.hideAnnotation(3);
                api.hideAnnotation(4);
                api.hideAnnotation(6);
                api.hideAnnotation(7);
                api.hideAnnotation(8);
                api.hideAnnotation(9);
                api.hideAnnotation(10);
                });

                document.getElementById('btn_radio_tympanicMembrane_01').addEventListener('click', function () {
                api.show(111);
                api.showAnnotation(0);
                api.showAnnotation(1);
                //for bone annotations
                api.hideAnnotation(2);
                api.hideAnnotation(3);
                api.hideAnnotation(4);
                api.hideAnnotation(6);
                api.hideAnnotation(7);
                api.hideAnnotation(8);
                api.hideAnnotation(9);
                api.hideAnnotation(10);
                api.hideAnnotation(13);
                api.hideAnnotation(14);
                api.hideAnnotation(15);
                api.hideAnnotation(16);
                api.hideAnnotation(17);
                api.hideAnnotation(18);
                api.hideAnnotation(19);
                api.hideAnnotation(20);
                });
                document.getElementById('btn_radio_tympanicMembrane_02').addEventListener('click', function () {
                api.hide(111);
                api.hideAnnotation(0);
                api.hideAnnotation(1);
                //for bone annotations
                api.showAnnotation(2);
                api.showAnnotation(3);
                api.showAnnotation(4);
                api.showAnnotation(6);
                api.showAnnotation(7);
                api.showAnnotation(8);
                api.showAnnotation(9);
                api.showAnnotation(10);
                api.showAnnotation(13);
                api.showAnnotation(14);
                api.showAnnotation(15);
                api.showAnnotation(16);
                api.showAnnotation(17);
                api.showAnnotation(18);
                api.showAnnotation(19);
                api.showAnnotation(20);
                });

                document.getElementById('btn_radio_malleus_01').addEventListener('click', function () {
                api.show(156);
                //for malleus annotations
                api.showAnnotation(11);
                api.showAnnotation(12);
                });
                document.getElementById('btn_radio_malleus_02').addEventListener('click', function () {
                api.hide(156);
                api.hideAnnotation(11);
                api.hideAnnotation(12);
                });

                document.getElementById('btn_radio_incus_01').addEventListener('click', function () {
                api.show(141);
                api.showAnnotation(13);
                api.showAnnotation(14);
                api.showAnnotation(15);
                });
                document.getElementById('btn_radio_incus_02').addEventListener('click', function () {
                api.hide(141);
                api.hideAnnotation(13);
                api.hideAnnotation(14);
                api.hideAnnotation(15);
                });

                document.getElementById('btn_radio_stapes_01').addEventListener('click', function () {
                api.show(126);
                api.showAnnotation(16);
                api.showAnnotation(17);
                api.showAnnotation(18);
                api.hideAnnotation(5);
                });
                document.getElementById('btn_radio_stapes_02').addEventListener('click', function () {
                api.hide(126);
                api.hideAnnotation(16);
                api.hideAnnotation(17);
                api.hideAnnotation(18);
                api.showAnnotation(5);
                });

                document.getElementById('btn_radio_tensorTympanii_01').addEventListener('click', function () {
                api.show(81);
                });
                document.getElementById('btn_radio_tensorTympanii_02').addEventListener('click', function () {
                api.hide(81);
                });

                document.getElementById('btn_radio_stapedius_01').addEventListener('click', function () {
                api.show(96);
                });
                document.getElementById('btn_radio_stapedius_02').addEventListener('click', function () {
                api.hide(96);
                });

                document.getElementById('btn_radio_facialNerve_01').addEventListener('click', function () {
                api.show(66);
                api.showAnnotation(19);
                });
                document.getElementById('btn_radio_facialNerve_02').addEventListener('click', function () {
                api.hide(66);
                api.hideAnnotation(19);
                });

                document.getElementById('btn_radio_IAM_01').addEventListener('click', function () {
                api.show(36);
                });
                document.getElementById('btn_radio_IAM_02').addEventListener('click', function () {
                api.hide(36);
                });

                document.getElementById('btn_radio_cochlea_01').addEventListener('click', function () {
                api.show(51);
                });
                document.getElementById('btn_radio_cochlea_02').addEventListener('click', function () {
                api.hide(51);
                });

                document.getElementById('btn_radio_jugular_01').addEventListener('click', function () {
                api.show(6);
                });
                document.getElementById('btn_radio_jugular_02').addEventListener('click', function () {
                api.hide(6);
                });

                document.getElementById('btn_radio_carotid_01').addEventListener('click', function () {
                api.show(21);
                });
                document.getElementById('btn_radio_carotid_02').addEventListener('click', function () {
                api.hide(21);
                });


            } );
        },
        error: function onError() {
            console.log( 'Viewer error' );
        }
        
        // navigation: 'fps',
        // fps_speed: 1
    } );
}