<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pizza Configurator</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">

            <div class="container">
                <div class="row">
                    <div class="col-sm-6" v-if="$store.state.action == 'dashboard'">
                        <pizza-list></pizza-list>
                    </div>

                    <div class="col-sm-6" v-if="$store.state.action == 'customize'">
                        <customize-pizza></customize-pizza>
                    </div>

                    <div class="col-sm-6" v-if="$store.state.action == 'customize'">
                        <topping-list></topping-list>
                    </div>
                </div>
            </div>

        </div>

        <script src="/js/app.js" charset="utf-8"></script>
    </body>
</html>
