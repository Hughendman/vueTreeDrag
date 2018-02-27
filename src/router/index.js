import Vue from 'vue'
import Router from 'vue-router'
import Bigdata from '@/components/bigdata'
import Table from '@/components/d3/table'
import Graph from '@/components/d3/graph'
import Form from '@/components/d3/form'
import ForTable from '@/components/forTable/forTable'
import TestCanvas from '@/components/testCanvas/testCanvas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Bigdata,
      children: [
        {
          path: '',
          redirect: { name: 'Table' }
        },{
          path: 'table',
          name: 'Table' ,
          component: Table
        },{
          path: 'form',
          name: 'Form' ,
          component: Form
        },{
          path: 'graph',
          name: 'Graph' ,
          component: Graph
        },{
          path: 'for',
          name: 'ForTable' ,
          component: ForTable
        },{
          path: 'testCanvas',
          name: 'TestCanvas' ,
          component: TestCanvas
        }
      ]
    }
  ]
})
