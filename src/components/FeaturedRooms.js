import React, { Component } from 'react';
import { RoomContext } from "../context";
import Title from "./Title";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
  render() {
     const { featuredRooms: rooms } = this.context;
     console.log(rooms); 
    return (
        <section className="Featured Room">
         <Title title="Featured Room"></Title>
      <div>
            hello world    
      </div>
      </section>
    );
  }
}
