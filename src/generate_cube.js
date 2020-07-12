import * as THREE from 'three';

export function genCube() {
    var group = new THREE.Group()
    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshNormalMaterial();
    
    for (let index = 0; index < 1000; index++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;
        group.add(mesh);
    }
    return group;
}