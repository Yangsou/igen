import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
class Breadcrumb extends Component {
    render() {
      const { data, setBackground } = this.props;
        return (
          <section className={`${setBackground?'background-grey':''} container-fluid`}>
              <nav className="container">
                  <ol className="breadcrumb">
                    {
                      data.map((e, index) => (
                        <li key={index} className={`breadcrumb-item ${e.active ? 'active' : ''}`}>
                          {
                            e.path ? <Link to={e.path}>{e.label}</Link>
                              : e.label
                          }
                          
                        </li>
                      ))
                    }
                  </ol>
              </nav>
            </section>
        );
    }
}

export default Breadcrumb;