
import { ReactNode } from 'react'
import {ModalBg} from './style'

type ModalProps = {
    active: boolean
    onClose:any
    children:ReactNode
}

export default function Modal({active,onClose,children}:ModalProps) {

    if(!active) return null

    return (
        <ModalBg onClick={onClose}>
            {children}
        </ModalBg>
    )
}
