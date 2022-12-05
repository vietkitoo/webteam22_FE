import React from 'react';
import { Link } from 'react-router-dom';
import './itemrooms.scss';
import { BsGeoAlt } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { IoIosMan } from 'react-icons/io';
const Itemrooms = ({ item }) => {
  return (
        <tbody>
          <tr>
            <td>
              <a href="#">{item.title}</a>
            </td>
            <td>
              <IoIosMan /> x {item.maxPeople}
            </td>
            <td>
              <div>{item.price} VND</div>
            </td>
            <td>
              <Link to="../booking">
                <button type="button" className="w-100 btn btn-primary">
                  Đặt chỗ
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
  );
};

export default Itemrooms;
