import { defineConfig } from "vite";

export default defineConfig( ( {
    command,
    mode,
    ssrBuild: ssr_build,
} ) => {

    switch ( command ) {

        case "serve":
            return createDevelopmentEnvironment();

        case "build":
            return createProductionEnvironment();

        default:
            throw new Error( "Unknow type" );

    }

    function createDevelopmentEnvironment () {

        return { /* 开发环境的配置 */ };

    }

    function createProductionEnvironment () {

        return { /* 生产环境的配置 */ };

    }

} );
