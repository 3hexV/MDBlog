const esbuild = require('esbuild')
const { copy } = require('esbuild-plugin-copy');

esbuild.build({
    entryPoints: ['./src/extension.js'],
    bundle: true,
    minify: true,
    platform: 'node',
    outdir: 'out',
    external: ['vscode'],
    plugins: [
        copy({
            assets: [
                {
                    from: 'node_modules/live-server/injected.html',
                    to: './'
                }
            ],
        })
    ]
})