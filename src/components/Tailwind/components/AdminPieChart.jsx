import React, { useState, useEffect }from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import axios from 'axios';
import { useStateContext } from '../../../../src/contexts/ContextProvider';
import ChartsHeader from './ChartsHeader';

const AdminPieChart = ({pending,confirmed,refunded,dispatched}) => {
 
   const { currentMode } = useStateContext();



  return (
    <div>
        <ChartsHeader  title='Order Distribution ' />
        <AccumulationChartComponent  legendSettings={{position:"Right", background: "white"}} tooltip={{enable:true}} background={currentMode === 'Dark' ? '#3f434c' : '#f2f2f2'} >
            <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective 
                    type="Pie"
                    dataSource={
                        [
                            { x: 'Pending', y: (pending).toPrecision(1), text: (20).toPrecision(2) + '%',color: '#1363DF'},
                            { x: 'confirmed', y: (confirmed).toPrecision(1), text: (69).toPrecision(2) + '%',  color: '#419D78'},
                            { x: 'dispatched', y: (dispatched).toPrecision(1), text: (28).toPrecision(2) + '%', color: '#432A31'},
                            { x: 'Refunded', y: (refunded).toPrecision(1), text: (28).toPrecision(2) + '%', color: '#A34453'},
                            
                        ]
                    }
                    pointColorMapping = "color"
                    xName="x"
                    yName="y"
                    innerRadius="40%"
                    startAngle={0}
                    endAngle={360}
                    radius="70%"
                    explode
                    explodeOffset="10%"
                    explodeIndex={2}
                    dataLabel={{
                        visible: true,
                        position: 'Outside',
                        name: 'text',
                        font: {
                          fontWeight: '600',
                        },
                    }}
                    >
                    
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
    </div>
  )
}

export default AdminPieChart