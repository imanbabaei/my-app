<template>
  <div>
    <v-app>
      <div>
        <v-app-bar
          elevation="4"
          class="ma-4"
          style="border-radius: 6pt"
        >
          <v-menu
              left bottom
              offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-icon class="mr-2">mdi-folder-search-outline</v-icon>
                Load a Worksheet
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-2">mdi-book</v-icon>
                User Guide
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-2">mdi-github</v-icon>
                GitHub
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-2">mdi-help-circle</v-icon>
                Support
              </v-list-item>
            </v-list>
          </v-menu>
          <v-app-bar-title>
            Seeq SysID
          </v-app-bar-title>
          <v-spacer></v-spacer>

          <v-tabs
            v-model="tabs"
            centered
            color="blue darken-4"
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              href="#mobile-tabs-5-1"
            >
              ARX
            </v-tab>

            <v-tab
                href="#mobile-tabs-5-2"
            >
              SubSpace
            </v-tab>

            <v-tab
              href="#mobile-tabs-5-3"
            >
              Neural Network
            </v-tab>

            <v-tab
              href="#mobile-tabs-5-4"
            >
              Transfer Function
            </v-tab>
          </v-tabs>

          <v-spacer></v-spacer>
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-folder-search-outline</v-icon>
          </v-btn>
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
      <v-card class="ma-4 mt-1" tag="appsheet">
        HelloWorld
      </v-card>
    </v-app>
  </div>

</template>