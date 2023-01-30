public enum GameStatus {
    NOT_STARTED,
    RUNNING,
    DRAW;
    DONE;
}

public class sportwebsite{
    int _id;
    Team team1;
    Team team2;
    String status;
    int score;

    sportwebsite( int _id , Team team1 , Team team2 , String status , int score ){
        this._id = _id;
        this.team1 = team1;
        this.team2 = team2;
        this.status = status;
        this.score = score;
    }
}

public class Score{
    int game_id;
    int team_id;
    int current_score;
    ArrayList<Integer> scores = new ArrayList<>();

    Score( int game_id , int team_id ){
        this.game_id = game_id;
        this.team_id = team_id;
        current_score = 0;
    } 

    public void add_score( int score ){
        this.scores.add( score );
    }

    public void update_score( int val ){
        this.current_score += val;
    }

    public int get_score(){
        return current_score;
    }
} 

public class Player{
    String name;
    String email;
    int phone;
    int global_ranking;
    int total_score;

    Player(String name , String email , int phone , int global_ranking , int total_score){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.global_ranking = global_ranking;
        this.total_score = total_score;
    }

    public int get_total_score(){
        return total_score;
    }

    public int get_global_ranking(){
        return global_ranking;
    }

    public void update_global_ranking(int current_ranking){
        this.global_ranking = current_ranking;
    }

    public void update_total_score(int val){
        this.total_score += val;
    }

}

public class Team{
    int _id;
    String name;
    ArrayList<Player> players;

    public void add_player(Player player){
        this.players.add( player );
    }

    public void remove_player(Player remove_player){
        if( players.indexOf( remove_player ) != -1 ){
            players.remove( players.indexOf( remove_player ) );
        }
    }
}

public class GameHistory{
    int game_id;
    Date startDate;
    Date endDate;
    Team winningTeam; 

    GameHistory( int game_id , Date startDate , Date endDate , Team winningTeam ){
        this.game_id = game_id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.winningTeam = winningTeam;
    }

    public void update_winning_team( Team newWinningTeam ){
        this.winningTeam = newWinningTeam;
    }

    public update_end_date(Date endDate){
        this.endDate = endDate;
    }
}

public class GameServices{
    sportwebsite currentGame;
    ArrayList<sportwebsite> games = new ArrayList<>();

    GameServices( sportwebsite currentGame ){
        this.currentGame = currentGame;
    }

    public sportwebsite create_gate( Team team1 , Team team2 ){
        game = new sportwebsite( team1 , team2 );
        this.games.append( game );
        return Game;
    }

    pubilc Game start_game( sportwebsite game ){
        while( true ){
            current_playing_team = 1;
            this.currentGame = game;
            currentGame.score = Score( currentGame._id , current_playing_team );
            if( currentGame.score == 100 ){
                LocalDateTime now = LocalDateTime.now();  
                end_game( currentGame , dtf.format(now)  );
                return currentGame;
            }
        }
    }

    public void end_game( sportwebsite currentGame , LocalDateTime currentTime ){
        currentGame.end_date = currentTime;
    }
}