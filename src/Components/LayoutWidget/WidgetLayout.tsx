import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }

    useEffect(() => {
        axios.get('http://localhost:3001/layoutWidget')
        .then(response => {
            setLayout(response.data)
        })
    }, [])

    const saveLayout = useCallback(() => {
        axios.post(`http://localhost:3001/layoutWidget`, layout)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }
        )
    }, [layout])

    return(
      <>
        <button onClick={() => saveLayout()}>Salvar</button>
        <GridLayout
              cols={12}
              rowHeight={30}
              width={1800}
              layout={layout}
              compactType='horizontal'
              onLayoutChange={onLayoutChange}
              >
                {layout.map((widget, i) => {
                    return(
                        <div key={i} data-grid={widget} style={{backgroundColor:"white"}}>
                        <div>
                            <h1>Widget</h1>
                        </div>
                    </div>
                    )
                }
                )}
        </GridLayout>
    </>
    )
}
