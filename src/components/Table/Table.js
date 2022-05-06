import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import {
    filterByCountAc,
    filterByCountDec,
    filterByDistAcc,
    filterByDistDec,
    filterFromA,
    filterFromZ
} from '../../redux/actions'
import TableItem from '../TableItem'
import Pagintaion from '../Pagintaion'
import { usePaginataion } from '../../hooks/usePagination'

const Table = () => {

    const [titleBtn, setTitleBtn] = useState(false)
    const [countBtn, setCountBtn] = useState(false)
    const [distBtn, setDistBtn] = useState(false)
    const dRefTitle = useRef(null)
    const dRefCount = useRef(null)
    const dRefDistance = useRef(null)

    // redux dispatch and selector
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state)

    // useOutsideClick hook 
    useOutsideClick(dRefTitle, () => setTitleBtn(false))
    useOutsideClick(dRefCount, () => setCountBtn(false))
    useOutsideClick(dRefDistance, () => setDistBtn(false))

    // Pagination consts
    const { jump, maxPage, prev, next, currentPage, currentData } = usePaginataion(posts, 5)
    const postsArray = currentData()

    return (
        <>
            <table className="table table-bordered user-select-none">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col" className='pe-auto'>Дата</th>
                        <th scope="col" className='pe-pointer dropdown'>
                            <span onClick={() => setTitleBtn(!titleBtn)} className='dropdown-toggle'> Название </span>
                            {/* Dropdown for title */}
                            <ul
                                className={`dropdown-menu ${titleBtn && 'active'}`}
                                ref={dRefTitle}
                            >
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterFromA())
                                    }}
                                >от А до Я</li>
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterFromZ())
                                    }}
                                >от Я до А</li>
                            </ul>
                        </th>
                        <th scope="col" className='pe-pointer dropdown'>
                            <span
                                className='dropdown-toggle'
                                onClick={() => setCountBtn(!countBtn)}
                            >Количество</span>
                            <ul
                                className={`dropdown-menu ${countBtn && 'active'}`}
                                ref={dRefCount}
                            >
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterByCountAc())
                                    }}
                                >По возрастанию</li>
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterByCountDec())
                                    }}
                                >По убыванию</li>
                            </ul>
                        </th>
                        <th scope="col" className='pe-pointer dropdown'>
                            <span
                                className='dropdown-toggle'
                                onClick={() => setDistBtn(!distBtn)}
                            >Расстояние</span>
                            <ul
                                className={`dropdown-menu ${distBtn && 'active'}`}
                                ref={dRefDistance}
                            >
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterByDistDec())
                                    }}
                                >По убыванию</li>
                                <li
                                    className="dropdown-item"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(filterByDistAcc())
                                    }}
                                >По возрастанию</li>
                            </ul>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {postsArray.length
                        ? postsArray.map(item => (
                            <TableItem key={item._id} item={item} />
                        ))
                        : <tr><td>Not found</td></tr>
                    }
                </tbody>
            </table >
            <Pagintaion
                jump={jump}
                maxPage={maxPage}
                prev={prev}
                next={next}
                currentPage={currentPage}
            />
        </>
    )
}

export default Table