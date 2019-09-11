import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
class Breadcrumb extends Component {
    render() {
      const { data } = this.props;
        return (
            <nav className="container">
                <ol className="breadcrumb">
                  {
                    data.map((e, index) => (
                      <li key={index} className={`breadcrumb-item ${e.active ? 'active' : ''}`}>
                        {
                          e.path ? <Link to="/">{e.label}</Link>
                            : e.label
                        }
                        
                      </li>
                    ))
                  }
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;