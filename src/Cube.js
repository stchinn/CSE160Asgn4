class Cube{
    constructor(){
        this.type='cube';
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.matrix = new Matrix4();
        this.textureNum = -5;
        this.cubeVerts = new Float32Array([
            0,0,0,  1,1,0,  1,0,0,
            0,0,0,  0,1,0,  1,1,0,
            0,1,0,  0,1,1,  1,1,1,
            0,1,0,  1,1,1,  1,1,0,
            1,1,0,  1,1,1,  1,0,0,
            1,0,0,  1,1,1,  1,0,1,
            0,1,0,  0,1,1,  0,0,0,
            0,0,0,  0,1,1,  0,0,1,
            0,0,0,  0,0,1,  1,0,1,
            0,0,0,  1,0,1,  1,0,0,
            0,0,1,  1,1,1,  1,0,1,
            0,0,1,  0,1,1,  1,1,1,
        ]);
        this.cubeVerts = [
            0,0,0,  1,1,0,  1,0,0,
            0,0,0,  0,1,0,  1,1,0,
            0,1,0,  0,1,1,  1,1,1,
            0,1,0,  1,1,1,  1,1,0,
            1,1,0,  1,1,1,  1,0,0,
            1,0,0,  1,1,1,  1,0,1,
            0,1,0,  0,1,1,  0,0,0,
            0,0,0,  0,1,1,  0,0,1,
            0,0,0,  0,0,1,  1,0,1,
            0,0,0,  1,0,1,  1,0,0,
            0,0,1,  1,1,1,  1,0,1,
            0,0,1,  0,1,1,  1,1,1,
        ]
    }

    // Render this shape
    render() {
        // Pass the position of a point to a_Position variable
        var rgba = this.color;

        // Pass the texture number
        gl.uniform1i(u_whichTexture, this.textureNum);

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Pass the matrix to u_ModelMatrix attribute
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        // Front of cube
        drawTriangle3DUVNormal([ 0.0, 0.0, 0.0,  1.0, 1.0, 0.0,  1.0, 0.0, 0.0 ], [0,0, 1,1, 1,0], [0,0,-1, 0,0,-1, 0,0,-1]);
        drawTriangle3DUVNormal([ 0.0, 0.0, 0.0,  0.0, 1.0, 0.0,  1.0, 1.0, 0.0 ], [0,0, 0,0, 0,0], [0,0,-1, 0,0,-1, 0,0,-1]);

        // Pass the color of a point to u_FragColor uniform variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Top of cube
        drawTriangle3DUVNormal([ 0.0, 1.0, 0.0,  1.0, 1.0, 1.0,  1.0, 1.0, 0.0 ], [0,0, 1,1, 1,0], [0,1,0, 0,1,0, 0,1,0]);
        drawTriangle3DUVNormal([ 0.0, 1.0, 0.0,  0.0, 1.0, 1.0,  1.0, 1.0, 1.0 ], [0,0, 0,1, 1,1], [0,1,0, 0,1,0, 0,1,0]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Right of cube
        drawTriangle3DUVNormal([ 1.0, 0.0, 0.0,  1.0, 1.0, 1.0,  1.0, 0.0, 1.0 ], [0,0, 1,1, 1,0], [1,0,0, 1,0,0, 1,0,0]);
        drawTriangle3DUVNormal([ 1.0, 0.0, 0.0,  1.0, 1.0, 0.0,  1.0, 1.0, 1.0 ], [0,0, 0,1, 1,1], [1,0,0, 1,0,0, 1,0,0]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Left of cube
        drawTriangle3DUVNormal([ 0.0, 0.0, 1.0,  0.0, 1.0, 0.0,  0.0, 0.0, 0.0 ], [0,0, 1,1, 1,0], [-1,0,0, -1,0,0, -1,0,0]);
        drawTriangle3DUVNormal([ 0.0, 0.0, 1.0,  0.0, 1.0, 1.0,  0.0, 1.0, 0.0 ], [0,0, 0,1, 1,1], [-1,0,0, -1,0,0, -1,0,0]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Bottom of cube
        drawTriangle3DUVNormal([ 0.0, 0.0, 0.0,  1.0, 0.0, 1.0,  1.0, 0.0, 0.0 ], [0,0, 1,1, 1,0], [0,-1,0, 0,-1,0, 0,-1,0]);
        drawTriangle3DUVNormal([ 0.0, 0.0, 0.0,  0.0, 0.0, 1.0,  1.0, 0.0, 1.0 ], [0,0, 0,1, 1,1], [0,-1,0, 0,-1,0, 0,-1,0]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Back of cube
        drawTriangle3DUVNormal([ 1.0, 0.0, 1.0,  0.0, 1.0, 1.0,  0.0, 0.0, 1.0 ], [0,0, 1,1, 1,0], [0,0,1, 0,0,1, 0,0,1]);
        drawTriangle3DUVNormal([ 1.0, 0.0, 1.0,  1.0, 1.0, 1.0,  0.0, 1.0, 1.0 ], [0,0, 0,1, 1,1], [0,0,1, 0,0,1, 0,0,1]);
    }

    // Render this shape
    renderfast() {
        // Pass the position of a point to a_Position variable
        var rgba = this.color;

        // Pass the texture number
        gl.uniform1i(u_whichTexture, this.textureNum);

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        var allverts=[];

        // Front of cube
        allverts = allverts.concat([ 0.0, 0.0, 0.0,  1.0, 1.0, 0.0,  1.0, 0.0, 0.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 0.0, 0.0, 0.0,  0.0, 1.0, 0.0,  1.0, 1.0, 0.0 ], [0,0, 0,1, 1,1]);

        // Pass the color of a point to u_FragColor uniform variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Top of cube
        allverts = allverts.concat([ 0.0, 1.0, 0.0,  1.0, 1.0, 1.0,  1.0, 1.0, 0.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 0.0, 1.0, 0.0,  0.0, 1.0, 1.0,  1.0, 1.0, 1.0 ], [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Right of cube
        allverts = allverts.concat([ 1.0, 0.0, 0.0,  1.0, 1.0, 1.0,  1.0, 0.0, 1.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 1.0, 0.0, 0.0,  1.0, 1.0, 0.0,  1.0, 1.0, 1.0 ], [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Left of cube
        allverts = allverts.concat([ 0.0, 0.0, 1.0,  0.0, 1.0, 0.0,  0.0, 0.0, 0.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 0.0, 0.0, 1.0,  0.0, 1.0, 1.0,  0.0, 1.0, 0.0 ], [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Bottom of cube
        allverts = allverts.concat([ 0.0, 0.0, 0.0,  1.0, 0.0, 1.0,  1.0, 0.0, 0.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 0.0, 0.0, 0.0,  0.0, 0.0, 1.0,  1.0, 0.0, 1.0 ], [0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        // Back of cube
        allverts = allverts.concat([ 1.0, 0.0, 1.0,  0.0, 1.0, 1.0,  0.0, 0.0, 1.0 ], [0,0, 1,1, 1,0]);
        allverts = allverts.concat([ 1.0, 0.0, 1.0,  1.0, 1.0, 1.0,  0.0, 1.0, 1.0 ], [0,0, 0,1, 1,1]);

        drawTriangle3D(allverts);
    }

    renderfaster() {
        var rgba = this.color;

        gl.uniform1i(u_whichTexture, -2);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        if (g_vertexBuffer == null) {
            initTriangle3D();
        }

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.cubeVerts), gl.DYNAMIC_DRAW);

        gl.drawArrays(gl.TRIANGLES, 0, 36);
    }
}

