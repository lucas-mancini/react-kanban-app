import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

class LaneStore {

    constructor() {
        this.bindActions(LaneActions);

        this.lanes = [];
    }

    create(lane) {
        const lanes = this.lanes;

        lane.id = uuid.v4();
        lane.notes = lane.notes || [];

        this.setState({
            lanes: lanes.concat(lane)
        });
    }

    attachToLane({noteId, laneId}) {
        const lanes = this.lanes.map(lane => {
            if(laneId === lane.id) {
                if(lane.notes.includes(noteId)) {
                    console.warn('Note already included in lane.');
                }
                else {
                    lane.notes.push(noteId);
                }
            }

            return lane;
        });

        this.setState({lanes});
    }

    detachFromLane({noteId, laneId}) {
        const lanes = this.lanes.map(lane => {
            if(lane.id === laneId) {
                lane.notes = lane.notes.filter(note => note !== noteId);
            }

            return lane;
        });

        this.setState({lanes});
    }

}

export default alt.createStore(LaneStore, 'LaneStore');