import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useCallback, useEffect, useState } from 'react'
import { useGetWidgetsQuery, usePostWidgetMutation } from '../../services/widget'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }

    const [postWidget] = usePostWidgetMutation()

    const {data,isSuccess,isLoading,isError} = useGetWidgetsQuery("teste")

    // Daqui até a linha 30 é para exibir os dados no banco e o tratamento de carregamento e erro
    useEffect(() => {
        if(isSuccess){
            setLayout(data)
        }
    }, [data,isSuccess])


    // Daqui até a linha 50 é para adicionar um novo widget
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addWidget = useCallback(() => {
        const newWidget = {
            i: `${layout.length}`,
            x: 0,
            y: Infinity,
            w: 1,
            h: 1,
            static: false,
            moved: false
        }
        return newWidget
    },[layout])

    // Daqui até a linha 70 é para adicionar um novo widget
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addWidgetToLayout = useCallback(() => {
        const newWidget = addWidget()
        setLayout([...layout,newWidget])
        postWidget(layout)
    },[addWidget,layout,postWidget])
    
    return(
    <div>
        <div>
        <button onClick={() => addWidgetToLayout()}>Add Widget</button>
            <GridLayout
                cols={12}
                rowHeight={30}
                width={1800}
                layout={layout}
                compactType='horizontal'
                onLayoutChange={onLayoutChange}
                >
                {layout.map((item) => (
                    <div key={item.i} data-grid={item} style={{backgroundColor:"white"}}>
                        <h1>Widget {item.i}</h1>
                    </div>
                ))}
            </GridLayout>
        </div>
    </div>
    )
}
